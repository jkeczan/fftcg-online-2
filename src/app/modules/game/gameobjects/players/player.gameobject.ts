import GameScene from '../../scenes/game.scene';
import {GameMessages, PriorityMessageInput} from '../../server/messages/game_messages';
import GameTurnUI, {TurnPriorityEvent, TurnUIEvent} from '../../ui/game_turn_ui';
import BreakZone from '../zones/break.zone';
import DamageZone from '../zones/damage.zone';
import DeckZone from '../zones/deck.zone';
import HandZone from '../zones/hand.zone';
import PlayerFieldZone from '../zones/player_field.zone';
import RemoveFromGameZone from '../zones/remove_from_game.zone';
import StageZone from '../zones/stage.zone';

export interface IPlayerConfig {
    id: string;
    scene: GameScene;
    opponent: boolean;
    boardWidth: number;
    boardHeight: number;
    zoneWidth: number;
    zoneHeight: number;
    zoneSpacing: number;
}

export default class PlayerBoard {
    private _scene: GameScene;
    private _id: string;
    private _handZone: HandZone;
    private _deckZone: DeckZone;
    private _breakZone: BreakZone;
    private _removedFromGameZone;
    private _damageZone: DamageZone;
    private _fieldZone: PlayerFieldZone;
    private _turnPhaseUI: GameTurnUI;
    private _stagingAreaZone: StageZone;

    constructor(config: IPlayerConfig) {
        this._id = config.id;
        this._scene = config.scene

        this._handZone = new HandZone({
            scene: config.scene,
            name: 'Hand',
            x: config.boardWidth / 2,
            y: config.opponent ? 0 : config.boardHeight,
            width: config.boardWidth * 0.7,
            height: config.zoneHeight,
            borderColor: 0xffff00,
            opponent: config.opponent
        });

        this._deckZone = new DeckZone({
            scene: config.scene,
            name: 'Deck',
            x: config.opponent ? this.handZone.getBounds().left - config.zoneWidth / 4 : this._handZone.getBounds().right + config.zoneWidth / 4,
            y: config.opponent ? (config.zoneHeight / 4) : config.boardHeight - (config.zoneHeight / 4),
            width: config.zoneWidth / 2,
            height: config.zoneHeight / 2,
            borderColor: 0x00ffff,
            opponent: config.opponent
        });

        this._breakZone = new BreakZone({
            scene: config.scene,
            name: 'Break',
            x: config.opponent ? this.deckZone.getBounds().left - config.zoneWidth / 4 : this._deckZone.getBounds().right + config.zoneWidth / 4,
            y: this.deckZone.y,
            width: config.zoneWidth / 2,
            height: config.zoneHeight / 2,
            borderColor: 0x00ffff,
            opponent: false
        });

        this._removedFromGameZone = new RemoveFromGameZone({
            scene: config.scene,
            name: 'RFG',
            x: config.opponent ? this.breakZone.getBounds().left - config.zoneWidth / 4 : this._breakZone.getBounds().right + config.zoneWidth / 4,
            y: this._breakZone.y,
            width: config.zoneWidth / 2,
            height: config.zoneHeight / 2,
            borderColor: 0x00ffff,
            opponent: false
        });

        this._damageZone = new DamageZone({
            scene: config.scene,
            name: 'Damage',
            x: config.opponent ? config.boardWidth - config.zoneWidth / 4 : config.zoneWidth / 4,
            y: config.opponent ? (config.zoneHeight / 2) : config.boardHeight - (config.zoneHeight / 2),
            width: config.zoneHeight,
            height: config.zoneWidth * 2,
            borderColor: 0x00ffff,
            opponent: false
        });

        this._fieldZone = new PlayerFieldZone({
            scene: config.scene,
            name: 'Field',
            x: config.boardWidth / 2,
            y: config.opponent ? this.handZone.y + this.handZone.height + config.zoneSpacing + (config.zoneHeight / 4) : this._handZone.y - this._handZone.height - config.zoneSpacing - (config.zoneHeight / 4),
            width: config.boardWidth * 0.7,
            height: config.zoneHeight * 1.2,
            borderColor: 0xA020F0,
            opponent: false
        });

        this._turnPhaseUI = new GameTurnUI({
            playerID: config.id,
            scene: config.scene,
            x: config.boardWidth / 2,
            y: config.opponent ? (this.handZone.height / 2) + (config.zoneHeight / 8) : this._handZone.y - (this._handZone.height / 2) - (config.zoneHeight / 8),
            width: config.boardWidth * 0.7,
            height: config.zoneHeight / 4,
            opponent: false,
            borderColor: 0xff0000,
            name: 'Player Game Turn UI',
            rexUI: this.scene.rexUI
        }).on(TurnUIEvent.RequestPriority, (params: TurnPriorityEvent) => {
            const requestMessageParams: PriorityMessageInput = {
                forTurnPhase: params.turnPhase
            };
            this.scene.server.room.send(GameMessages.RequestPriority, requestMessageParams);
        }).on(TurnUIEvent.ReleasingPriority, (params: TurnPriorityEvent) => {
            const releaseMessageParams: PriorityMessageInput = {
                forTurnPhase: params.turnPhase
            };
            this.scene.server.room.send(GameMessages.ReleasingPriority, releaseMessageParams);
        });

        this._stagingAreaZone = new StageZone({
            name: 'Staging Area',
            opponent: config.opponent,
            scene: config.scene,
            x: config.boardWidth - config.zoneWidth,
            y: config.boardHeight / 2,
            width: config.zoneWidth,
            height: config.zoneHeight
        });

    }


    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get scene(): GameScene{
        return this._scene;
    }

    set scene(value: GameScene) {
        this._scene = value;
    }


    get handZone(): HandZone {
        return this._handZone;
    }

    set handZone(value: HandZone) {
        this._handZone = value;
    }

    get deckZone(): DeckZone {
        return this._deckZone;
    }

    set deckZone(value: DeckZone) {
        this._deckZone = value;
    }

    get breakZone(): BreakZone {
        return this._breakZone;
    }

    set breakZone(value: BreakZone) {
        this._breakZone = value;
    }

    get removedFromGameZone() {
        return this._removedFromGameZone;
    }

    set removedFromGameZone(value) {
        this._removedFromGameZone = value;
    }

    get damageZone(): DamageZone {
        return this._damageZone;
    }

    set damageZone(value: DamageZone) {
        this._damageZone = value;
    }

    get fieldZone(): PlayerFieldZone {
        return this._fieldZone;
    }

    set fieldZone(value: PlayerFieldZone) {
        this._fieldZone = value;
    }

    get turnPhaseUI(): GameTurnUI {
        return this._turnPhaseUI;
    }

    set turnPhaseUI(value: GameTurnUI) {
        this._turnPhaseUI = value;
    }

    get stagingAreaZone(): StageZone {
        return this._stagingAreaZone;
    }

    set stagingAreaZone(value: StageZone) {
        this._stagingAreaZone = value;
    }
}
