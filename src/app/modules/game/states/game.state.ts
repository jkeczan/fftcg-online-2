import FSM from 'phaser3-rex-plugins/plugins/fsm.js';
import Player from '../gameobjects/players/player.gameobject';
import FFTCGCard from '../gameobjects/cards/fftcg_card';
import GameTurnUI from '../gameobjects/game_turn_ui';


export enum GameStates {
    LOADING_GAME = 'loadingGame',
    START_GAME = 'startGame',
    PLAYER_TURN = 'playerTurn',
    OPPONENT_TURN = 'opponentTurn',
    SWITCH_TURN = 'switchTurn',
    END_GAME = 'endGame'
}

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

export default class GameState extends FSM {
    private _player: Player;
    private _opponent: Player;
    private _playerTurn: boolean; // true for player, false for opponent
    private _cardToPlay: FFTCGCard;
    private _turnUI: GameTurnUI;
    private _generatedCP: number;
    private _isFirstTurn = true;

    constructor() {
        super();
    }

    enter_loadingGame() {
        console.log('Game State: Entering: Loading Game');
    }

    next_loadingGame() {
        console.log('Game State: Loading...');
        return GameStates.PLAYER_TURN;
    }

    exit_loadingGame() {
        console.log('Game State: Exiting: Loading Game');
    }

    enter_startGame() {
        console.log('Game State: Entering: Start Game');
    }

    next_startGame() {
        console.log('Start Game');
        return GameStates.PLAYER_TURN;
    }

    exit_startGame() {
        console.log('Game State: Exiting: Start Game');
    }

    enter_playerTurn() {
        console.log('Game State: Entering: Player Turn');
        this._playerTurn = true;
        this.turnUI = this.player.turnUI;
        this.goto(TurnStates.ACTIVE);
    }

    next_playerTurn() {
        console.log('Game State: Player Turn');
        return GameStates.SWITCH_TURN;
    }

    //
    // exit_playerTurn() {
    //     console.log('Game State: Exiting: Player Turn');
    //     return ;
    // }

    enter_opponentTurn() {
        console.log('Game State: Entering: Opponent Turn');
        this.playerTurn = false;
        this.turnUI = this.opponent.turnUI;
        this.goto(TurnStates.START_TURN);
    }

    next_opponentTurn() {
        console.log('Game State: Opponent Turn');
        return GameStates.PLAYER_TURN;
    }

    exit_opponentTurn() {
        console.log('Game State: Exiting: Opponent Turn');
        this.goto(TurnStates.END_TURN);
    }

    enter_switchTurn() {
        console.log('Game State: Entering: Switch Turn');
        this.playerTurn = !this.playerTurn;
        if (this.playerTurn) {
            console.log('Players Turn');
            this.goto(GameStates.PLAYER_TURN);
        } else {
            console.log('Opponents Turn');
            this.goto(GameStates.OPPONENT_TURN);
        }
    }

    next_switchTurn() {
        console.log('Game State: Switch Turn');

    }

    exit_switchTurn() {
        console.log('Game State: Exiting: Switch Turn');
    }

    enter_endGame() {
        console.log('Game State: Entering: End Game');
    }

    next_endGame() {
        console.log('Game State: End Game');
        return null;
    }

    exit_endGame() {
        console.log('Game State: Exiting End Game');
    }

    /**
     * Turn States
     */
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
        if (this.generatedCP < this.cardToPlay.requiredCP()) {
            return null;
        } else {
            return this.prevState;
        }
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

    enter_playCard() {
        console.log('Entering Play Card');
        this.generatedCP = 0;
        this.cardToPlay.endHover();
        // this.player.hand.shakeCards();
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

    exit_playCard() {
        console.log('Exiting Play Card');
        this.player.hand.stopShaking();
        this.player.stagingArea.hideButtons();
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
        this.isFirstTurn = false;
    }

    get playerTurn(): boolean {
        return this._playerTurn;
    }

    set playerTurn(value: boolean) {
        this._playerTurn = value;
    }

    get opponent(): Player {
        return this._opponent;
    }

    set opponent(value: Player) {
        this._opponent = value;
    }

    get cardToPlay(): FFTCGCard {
        return this._cardToPlay;
    }

    set cardToPlay(value: FFTCGCard) {
        this._cardToPlay = value;
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

    get generatedCP(): number {
        return this._generatedCP;
    }

    set generatedCP(value: number) {
        this._generatedCP = value;
    }

    get isFirstTurn(): boolean {
        return this._isFirstTurn;
    }

    set isFirstTurn(value: boolean) {
        this._isFirstTurn = value;
    }
}
