import FSM from 'phaser3-rex-plugins/plugins/fsm.js';
import GameTurnUI from '../gameobjects/game_turn_ui';
import Player from '../gameobjects/players/player.gameobject';

export enum TurnStates {
    START_TURN = 'startTurn',
    ACTIVE = 'activePhase',
    DRAW = 'drawPhase',
    MAIN_1 = 'mainPhase1',
    ATTACK = 'attackPhase',
    MAIN_2 = 'mainPhase2',
    END = 'endPhase',
    END_TURN = 'endTurn'
}

/**
 * Build off of Rex FSM
 *
 * Hooks will execute in the following order
 * enter
 * next
 * exit
 */
export default class GameTurnState extends FSM {
    private _turnUI: GameTurnUI;
    private _player: Player;

    constructor() {
        super();
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

    enter_activePhase() {
        console.log('Entering Active Phase');
        this.turnUI.activePhase.showIndicator();
        this.player.field.forwardZone.activateCards();
        this.player.field.backupZone.activateCards();
    }

    enter_drawPhase() {
        console.log('Entering Draw Phase');
        this.turnUI.drawPhase.showIndicator();
    }

    enter_mainPhase1() {
        console.log('Entering MP1 Phase');
        this.turnUI.mainPhase1.showIndicator();
    }

    enter_attackPhase() {
        console.log('Entering Attack Phase');
        this.turnUI.attackPhase.showIndicator();
    }

    enter_mainPhase2() {
        console.log('Entering MP2 Phase');
        this.turnUI.mainPhase2.showIndicator();
    }

    enter_endPhase() {
        console.log('Entering End Phase');
        this.turnUI.endPhase.showIndicator();
    }

    enter_endTurn() {
        console.log('Entering End Turn');
    }

    exit_activePhase() {
        console.log('Exiting Active Phase');
        this.turnUI.activePhase.hideIndicator();
    }

    exit_drawPhase() {
        console.log('Exiting Draw Phase');
        this.turnUI.drawPhase.hideIndicator();
    }

    exit_mainPhase1() {
        console.log('Exiting MP1 Phase');
        this.turnUI.mainPhase1.hideIndicator();
        this.player.hand.stopShaking();
    }

    exit_attackPhase() {
        console.log('Exiting Attack Phase');
        this.turnUI.attackPhase.hideIndicator();
    }

    exit_mainPhase2() {
        console.log('Exiting MP2 Phase');
        this.turnUI.mainPhase2.hideIndicator();
        this.player.hand.stopShaking();
    }

    exit_endPhase() {
        console.log('Exiting End Phase');
        this.turnUI.endPhase.hideIndicator();
    }

    exit_endTurn() {
        console.log('Exiting End Turn');
    }

    get turnUI(): GameTurnUI {
        return this._turnUI;
    }

    set turnUI(value: GameTurnUI) {
        this._turnUI = value;
    }

    get player(): Player {
        return this._player;
    }

    set player(value: Player) {
        this._player = value;
    }
}
