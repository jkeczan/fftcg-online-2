import {Client, Room} from 'colyseus.js';
import {environment} from '../../../../environments/environment';
import {CorneliaRoomState} from './states/CorneliaRoomState';
import {PlayerState} from './states/PlayerState';

export enum GameRoom {
    Cornelia = 'Cornelia'
}

export default class GameServer {
    public client: Client;
    public connectedRoom: Room<CorneliaRoomState>;

    constructor() {
        this.client = new Client(environment.serverUrl);
    }

    async joinGame() {
        this.connectedRoom = await this.client.joinOrCreate(GameRoom.Cornelia);
    }

    getCurrentPlayer(): PlayerState {
        return this.connectedRoom.state.players.get(this.connectedRoom.sessionId);
    }

    getOpposingPlayer(): PlayerState {
        for (const player of this.connectedRoom.state.players.values()) {
            if (this.connectedRoom.sessionId !== player.sessionID) {
                return player;
            }
        }
    }

    playerHasPriority(): boolean {
        return this.state.turn.playerWithPriority === this.connectedRoom.sessionId;
    }

    get room() {
        return this.connectedRoom;
    }

    get state() {
        return this.connectedRoom.state;
    }

    get isPlayersTurn() {
        return this.state.playerTurn === this.connectedRoom.sessionId;
    }
}
