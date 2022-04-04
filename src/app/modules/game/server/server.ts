import {Client, Room} from 'colyseus.js';

export enum GameRoom {
    Cornelia = 'Cornelia'
}

export default class GameServer {
    public client: Client;
    public room: Room;

    constructor() {
        this.client = new Client('ws://localhost:2567');
    }

    async joinGame() {
        this.room = await this.client.joinOrCreate(GameRoom.Cornelia);
    }
}
