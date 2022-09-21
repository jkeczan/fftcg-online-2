import FSM from 'phaser3-rex-plugins/plugins/fsm.js';
import Player from '../gameobjects/players/player.gameobject';

export enum TurnStates {
    START_TURN = 'startTurn',
    ACTIVE = 'activePhase',
    DRAW = 'drawPhase',
    MAIN_1 = 'mainPhase1',
    PLAY_A_CARD = 'playCard',
    ATTACK = 'attackPhase',
    MAIN_2 = 'mainPhase2',
    END = 'endPhase',
    END_TURN = 'endTurn'
}

export enum TurnStateEvents {
    ENTER_START_TURN = 'enter_startTurn',
    NEXT_START_TURN = 'next_startTurn',
    EXIT_START_TURN = 'exit_startTurn',

    ENTER_ACTIVE_PHASE = 'enter_activePhase',
    NEXT_ACTIVE_PHASE = 'next_activePhase',
    EXIT_ACTIVE_PHASE = 'exit_activePhase',

    ENTER_DRAW_PHASE = 'enter_drawPhase',
    NEXT_DRAW_PHASE = 'next_drawPhase',
    EXIT_DRAW_PHASE = 'exit_drawPhase',

    ENTER_MAIN_1_PHASE = 'enter_mainPhase1',
    NEXT_MAIN_1_PHASE = 'next_mainPhase1',
    EXIT_MAIN_1_PHASE = 'exit_mainPhase1',

    ENTER_ATTACK_PHASE = 'enter_attackPhase',
    NEXT_ATTACK_PHASE = 'next_attackPhase',
    EXIT_ATTACK_PHASE = 'exit_attackPhase',

    ENTER_PLAY_CARD = 'enter_playCard',
    NEXT_PLAY_CARD = 'next_playCard',
    EXIT_PLAY_CARD = 'exit_playCard',

    ENTER_MAIN_2_PHASE = 'enter_mainPhase2',
    NEXT_MAIN_2_PHASE = 'next_mainPhase2',
    EXIT_MAIN_2_PHASE = 'exit_mainPhase2',

    ENTER_END_PHASE = 'enter_endPhase',
    NEXT_END_PHASE = 'next_endPhase',
    EXIT_END_PHASE = 'exit_endPhase',

    ENTER_END_TURN = 'enter_endTurn',
    NEXT_END_TURN = 'next_endTurn',
    EXIT_END_TURN = 'exit_endTurn',

    STATE_CHANGE = 'statechange'
}

export class TurnState extends FSM {
    private _player: Player;
    private lastStateChange: Date;

    constructor() {
        super();
    }


    on(event: TurnStateEvents | 'statechange', fn: (state: TurnState) => void, context?: any): this {
        return super.on(event, fn, context);
    }

    next(): this {
        const currentTime = new Date();

        if (!this.lastStateChange || Phaser.Math.Difference(currentTime.getTime(), this.lastStateChange.getTime()) > 1250) {
            this.lastStateChange = new Date(currentTime);
            return super.next();
        }
    }

    next_startTurn() {
        console.log('Start Turn -> Active');
        return TurnStates.ACTIVE;
    }

    next_activePhase() {
        console.log('Active Phase -> Draw');
        return TurnStates.DRAW;
    }

    next_drawPhase() {
        console.log('Draw Phase -> Main 1');
        return TurnStates.MAIN_1;
    }

    next_mainPhase1() {
        console.log('MP1 -> Attack');
        return TurnStates.ATTACK;
    }

    next_attackPhase() {
        console.log('Attack -> MP2');
        return TurnStates.MAIN_2;
    }

    next_mainPhase2() {
        console.log('MP2 - > End');
        return TurnStates.END;
    }

    next_endPhase() {
        console.log('End -> End Turn');
        return TurnStates.END_TURN;
    }

    next_endTurn() {
        console.log('End Turn -> null');
        return null;
    }

    next_playCard() {
        // if (this.generatedCP < this.cardToPlay.requiredCP()) {
        //     return this.prevState;
        // } else {
        //     return this.prevState;
        // }
    }

    enter_startTurn() {
        return TurnStates.ACTIVE;
    }

    async enter_activePhase() {
        console.log('Turn Entering Active Phase');
        // this.turnUI.activePhase.showIndicator();
        // if (this.playerTurn) {
        //     this.player.field.forwardZone.activateCards();
        //     this.player.field.backupZone.activateCards();
        // } else {
        //     this.opponent.field.forwardZone.activateCards();
        //     this.opponent.field.backupZone.activateCards();
        // }
        // await delay(2000);

        this.next();
    }

    enter_drawPhase() {
        console.log('Entering Draw Phase');
        // this.turnUI.drawPhase.showIndicator();
    }

    enter_mainPhase1() {
        this.enable = false;
        console.log('Entering MP1 Phase');
        // this.turnUI.mainPhase1.showIndicator();
    }

    enter_playCard() {
        console.log('Entering Play Card');
        // this.generatedCP = 0;
        // this.cardToPlay.endHover();
        // this.player.hand.shakeCards();
    }

    enter_attackPhase() {
        console.log('Entering Attack Phase');
        // this.turnUI.attackPhase.showIndicator();
    }

    enter_mainPhase2() {
        console.log('Entering MP2 Phase');
        // this.turnUI.mainPhase2.showIndicator();
    }

    enter_endPhase() {
        console.log('Entering End Phase');
        // this.turnUI.endPhase.showIndicator();
    }

    enter_endTurn() {
        console.log('Entering End Turn');
    }

    exit_activePhase() {
        console.log('Exiting Active Phase');
        // this.turnUI.activePhase.hideIndicator();
    }

    exit_drawPhase() {
        console.log('Exiting Draw Phase');
        // this.turnUI.drawPhase.hideIndicator();
    }

    exit_mainPhase1() {
        console.log('Exiting MP1 Phase');
        // this.turnUI.mainPhase1.hideIndicator();
        // this.player.hand.stopShaking();
    }

    exit_playCard() {
        console.log('Exiting Play Card');
        // this.player.hand.stopShaking();
        // this.player.stagingArea.hideButtons();

    }

    exit_attackPhase() {
        console.log('Exiting Attack Phase');
        // this.turnUI.attackPhase.hideIndicator();
    }

    exit_mainPhase2() {
        console.log('Exiting MP2 Phase');
        // this.turnUI.mainPhase2.hideIndicator();
        // this.player.hand.stopShaking();
    }

    exit_endPhase() {
        console.log('Exiting End Phase');
        // this.turnUI.endPhase.hideIndicator();
    }

    exit_endTurn() {
        console.log('Exiting End Turn');
        // this.isFirstTurn = false;
    }

    get player(): Player {
        return this._player;
    }

    set player(value: Player) {
        this._player = value;
    }
}
