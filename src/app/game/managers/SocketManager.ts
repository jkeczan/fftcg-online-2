// import {io, Socket} frsoom 'socket.io-client';
import Sockette from 'sockette';

export class SocketManager {
    private socket: Sockette;

    constructor() {
        this.socket = new Sockette('wss://03rd1ovyzh.execute-api.us-east-1.amazonaws.com/development', {
            timeout: 5e3,
            maxAttempts: 10,
            onopen: e => this.onOpen.bind(this),
            onmessage: e => this.onMessage.bind(this),
            onreconnect: e => this.onReconnect.bind(this),
            onmaximum: e => this.onMaximum.bind(this),
            onclose: e => this.onClosed.bind(this),
            onerror: e => this.onError.bind(this)
        });
    }

    sendMessage(message: string) {

    }

    onOpen() {

    }

    onClosed() {

    }

    onSend() {

    }

    onMessage() {

    }

    onMaximum() {

    }

    onError(err) {

    }

    onReconnect() {

    }
}
