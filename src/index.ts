// Import required modules
const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const sqlite3 = require('sqlite3');
import { open } from 'sqlite'; // Import with ES module syntax for TypeScript

// Main async function to set up server and database
async function main() {
  // Open a SQLite database file (creates it if it doesn't exist)
  const openDatabase = await open({
    filename: 'chatOne.db',
    driver: sqlite3.Database
  });

  const db = openDatabase; // Assign to db after ensuring it's not null

  if (!db) {
    throw new Error('Failed to open database');
  }

  // Create a messages table if it doesn't already exist
  await db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      client_offset TEXT UNIQUE,
      content TEXT
    );
  `);

  // Set up express app and HTTP server
  const app = express();
  const server = createServer(app);

  // Create a Socket.IO server with connection state and recovery enabled
  const io = new Server(server, {
    connectionStateRecovery: {}
  });

  // Serve the chat frontend (index.html) at the root URL
  app.get('/', (req: any, res: { sendFile: (arg0: any) => void }) => {
    res.sendFile(join(__dirname, 'index.html'));
  });

  // Handle WebSocket connections
  io.on('connection', async (socket: { on: (arg0: string, arg1: (msg: any, clientOffset: any, callback: any) => Promise<void>) => void; recovered: any; handshake: { auth: { serverOffset: any } }; emit: (arg0: string, arg1: any, arg2: any) => void }) => {
    // Listen for 'chat message' events from clients
    socket.on('chat message', async (msg, clientOffset, callback) => {
      let result;
      try {
        // Try inserting the new message into the database
        result = await db.run('INSERT INTO messages (content, client_offset) VALUES (?, ?)', [msg, clientOffset]);
      } catch (e: any) {
        // Handle duplicate clientOffset errors (message already inserted)
        if (e.errno === 19 /* SQLITE_CONSTRAINT */) {
          callback();
        } else {
          // Other errors are ignored to let client re-entry
        }
        return;
      }

      // Broadcast the message to all connected clients
      io.emit('chat message', msg, result.lastID);
      callback(); // Ensure callback is called
    });

    // If this is a new connection (not recovered), send missed messages
    if (!socket.recovered) {
      try {
        await db.each('SELECT id, content FROM messages WHERE id > ?', [socket.handshake.auth.serverOffset || 0], (_err: any, row: { content: any; id: any }) => {
          // Send each missed message back to the client
          socket.emit('chat message', row.content, row.id);
        });
      } catch (e) {
        console.error('Database error:', e);
      }
    }
  });

  // Start the server on port 3000
  server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
  });
}

// Run main function
main().catch(err => console.error('Error starting server:', err));