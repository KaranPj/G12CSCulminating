import { user } from './user';
import { ChatRoom} from './chatRoom';

class chatServer {
    protected users : user[];
    private chatRooms : ChatRoom[]

    addParticipant(user: user) : void{

    }
    removeParticipants(userId : string) : void{

    }
    broadcastMessage(message : Message) : void{

    }
    createRoom(room : ChatRoom) : void{

    }
    deleteRoom(roomId : string) : void{

    }
    getRoomById(roomId : string) : ChatRoom{

    }
}