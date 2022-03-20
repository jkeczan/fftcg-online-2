import FSM from 'phaser3-rex-plugins/plugins/fsm.js';
import GameTurnState, {TurnStates} from './turn.state';
import Player from '../gameobjects/players/player.gameobject';


export enum GameStates {
    LOADING_GAME = 'loadingGame',
    START_GAME = 'startGame',
    PLAYER_TURN = 'playerTurn',
    OPPONENT_TURN = 'opponentTurn',
    SWITCH_TURN = 'switchTurn',
    END_GAME = 'endGame'
}

export default class GameState extends FSM {
    private _turnState: GameTurnState;
    private _player: Player;
    private _opponent: Player;
    private _playerTurn: boolean; // true for player, false for opponent

    constructor() {
        super();

        this._turnState = new GameTurnState();
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
        this._turnState.turnUI = this.player.turnUI;
        this._turnState.player = this.player;
        this._turnState.start(TurnStates.START_TURN);
        this._turnState.goto(TurnStates.ACTIVE);
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
        this.turnState.turnUI = this.opponent.turnUI;
        this._turnState.player = this.opponent;
        this.turnState.start(TurnStates.START_TURN);
    }

    next_opponentTurn() {
        console.log('Game State: Opponent Turn');
        return GameStates.PLAYER_TURN;
    }

    exit_opponentTurn() {
        console.log('Game State: Exiting: Opponent Turn');
        this._turnState.goto(TurnStates.END_TURN);
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

    get turnState(): GameTurnState {
        return this._turnState;
    }

    set turnState(value: GameTurnState) {
        this._turnState = value;
    }

    get playerTurn(): boolean {
        return this._playerTurn;
    }

    set playerTurn(value: boolean) {
        this._playerTurn = value;
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
