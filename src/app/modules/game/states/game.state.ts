import FSM from 'phaser3-rex-plugins/plugins/fsm.js';
import FFTCGCard from '../gameobjects/cards/fftcg_card';
import Player from '../gameobjects/players/player.gameobject';
import GameTurnUI from '../ui/game_turn_ui';


export enum GameStates {
    CHOOSE_DECK = 'chooseDeck',
    ROLL_DICE = 'rollDice',
    DETERMINE_HAND = 'determineHand',
    LOADING_GAME = 'loadingGame',
    START_GAME = 'startGame',
    PLAYER_TURN = 'playerTurn',
    OPPONENT_TURN = 'opponentTurn',
    SWITCH_TURN = 'switchTurn',
    END_GAME = 'endGame'
}

export enum GameStateEvents {
    ENTER_CHOOSE_DECK = 'enter_chooseDeck',
    NEXT_CHOOSE_DECK = 'next_chooseDeck',
    EXIT_CHOOSE_DECK = 'exit_chooseDeck',

    ENTER_ROLL_DICE = 'enter_rollDice',
    NEXT_ROLL_DICE = 'next_rollDice',
    EXIT_ROLL_DICE = 'exit_rollDice',

    ENTER_DETERMINE_HAND = 'enter_determineHand',
    NEXT_DETERMINE_HAND = 'next_determineHand',
    EXIT_DETERMINE_HAND = 'exit_determineHand',

    ENTER_LOADING_GAME = 'enter_loadingGame',
    NEXT_LOADING_GAME = 'next_loadingGame',
    EXIT_LOADING_GAME = 'exit_loadingGame',

    ENTER_START_GAME = 'enter_startGame',
    NEXT_START_GAME = 'next_startGame',
    EXIT_START_GAME = 'exit_startGame',
    ENTER_PLAYER_TURN = 'enter_playerTurn',
    NEXT_PLAYER_TURN = 'next_playerTurn',
    EXIT_PLAYER_TURN = 'exit_playerTurn',
    ENTER_OPPONENT_TURN = 'enter_opponentTurn',
    NEXT_OPPONENT_TURN = 'next_opponentTurn',
    EXIT_OPPONENT_TURN = 'exit_opponentTurn',
    ENTER_SWITCH_TURN = 'enter_switchTurn',
    NEXT_SWITCH_TURN = 'next_swtichTurn',
    EXIT_SWITCH_TURN = 'exit_switchTurn',
    ENTER_END_GAME = 'enter_endGame',
    NEXT_END_GAME = 'next_endGame',
    EXIT_END_GAME = 'exit_endGame',
    STATE_CHANGE = 'statechange'
}

export default class GameState extends FSM {
    private _player: Player;
    private _playerTurn: boolean; // true for player, false for opponent
    private _opponent: Player;
    private _cardToPlay: FFTCGCard;
    private _turnUI: GameTurnUI;
    private _generatedCP: number;
    private _isFirstTurn = true;
    private _stateGovernor: number;

    constructor() {
        super();
    }

    on(event: GameStates | string | symbol, fn: (state: GameState) => void, context?: any): this {
        return super.on(event, fn, context);
    }

    startGame() {
        this.goto(GameStates.CHOOSE_DECK);
    }

    enter_chooseDeck() {
        console.log('Game State: Entering: Choose Deck');
    }

    next_chooseDeck() {
        console.log('Game State: Choose Deck --> Roll Dice');
        return GameStates.ROLL_DICE;
    }

    exit_rollDice() {
        console.log('Game State: Exiting: Roll Dice');
    }

    enter_rollDice() {
        console.log('Game State: Entering: Roll Dice');
    }

    next_rollDice() {
        console.log('Game State: Roll Dice --> Determine Hand');
        return GameStates.DETERMINE_HAND;
    }

    enter_determineHand() {
        console.log('Game State: Entering: Determine hand');
    }

    next_determineHand() {
        console.log('Game State: Determine Hand --> Loading Game');
        return GameStates.LOADING_GAME;
    }

    exit_determineHand() {
        console.log('Game State: Exiting: Determine Hand');
    }

    exit_chooseDeck() {
        console.log('Game State: Exiting: Choose Deck');
    }

    enter_loadingGame() {
        console.log('Game State: Entering: Loading Game');
        this.goto(GameStates.START_GAME);
    }

    next_loadingGame() {
        console.log('Game State: Loading...');
        return GameStates.START_GAME;
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
        this.enable = false;
        console.log('Game State: Entering: Player Turn');
    }

    next_playerTurn() {
        console.log('Game State: Player Turn');
        return GameStates.SWITCH_TURN;
    }

    exit_playerTurn() {
        console.log('Game State: Exiting: Player Turn');
        // return GameStates.SWITCH_TURN;
    }

    enter_opponentTurn() {
        console.log('Game State: Entering: Opponent Turn');
    }

    next_opponentTurn() {
        console.log('Game State: Opponent Turn');
        return GameStates.SWITCH_TURN;
    }

    exit_opponentTurn() {
        console.log('Game State: Exiting: Opponent Turn');

        // return GameStates.SWITCH_TURN;
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

    get playerTurn(): boolean {
        return this._playerTurn;
    }

    set playerTurn(value: boolean) {
        this._playerTurn = value;
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

    get player(): Player {
        return this._player;
    }

    set player(value: Player) {
        this._player = value;
    }

    get opponent(): Player {
        return this._opponent;
    }

    set opponent(value: Player) {
        this._opponent = value;
    }

}
