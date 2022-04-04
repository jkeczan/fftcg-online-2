import GameTurnUI from '../../ui/game_turn_ui';
import BreakZone from '../zones/break.zone';
import DamageZone from '../zones/damage.zone';
import DeckZone from '../zones/deck.zone';
import HandZone from '../zones/hand.zone';
import PlayerFieldZone from '../zones/player_field.zone';
import RemoveFromGameZone from '../zones/remove_from_game.zone';
import StageZone from '../zones/stage.zone';

export interface IPlayerConfig {
    id: string;
    hand?: HandZone;
    damageZone?: DamageZone;
    deck?: DeckZone;
    breakZone?: BreakZone;
    field?: PlayerFieldZone;
    removedFromGame?: RemoveFromGameZone;
    turnUI?: GameTurnUI;
    stagingArea?: StageZone;
}

export default class PlayerBoard {
    constructor(config: IPlayerConfig) {
        this._id = config.id;
        this._hand = config.hand;
        this._damageZone = config.damageZone;
        this._deck = config.deck;
        this._breakZone = config.breakZone;
        this._field = config.field;
        this._removedFromGame = config.removedFromGame;
        this._turnUI = config.turnUI;
        this._stagingArea = config.stagingArea;

    }

    private _id: string;

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    private _hand: HandZone;

    get hand(): HandZone {
        return this._hand;
    }

    set hand(value: HandZone) {
        this._hand = value;
    }

    private _damageZone: DamageZone;

    get damageZone(): DamageZone {
        return this._damageZone;
    }

    set damageZone(value: DamageZone) {
        this._damageZone = value;
    }

    private _deck: DeckZone;

    get deck(): DeckZone {
        return this._deck;
    }

    set deck(value: DeckZone) {
        this._deck = value;
    }

    private _breakZone: BreakZone;

    get breakZone(): BreakZone {
        return this._breakZone;
    }

    set breakZone(value: BreakZone) {
        this._breakZone = value;
    }

    private _field: PlayerFieldZone;

    get field(): PlayerFieldZone {
        return this._field;
    }

    set field(value: PlayerFieldZone) {
        this._field = value;
    }

    private _removedFromGame: RemoveFromGameZone;

    get removedFromGame(): RemoveFromGameZone {
        return this._removedFromGame;
    }

    set removedFromGame(value: RemoveFromGameZone) {
        this._removedFromGame = value;
    }

    private _turnUI: GameTurnUI;

    get turnUI(): GameTurnUI {
        return this._turnUI;
    }

    set turnUI(value: GameTurnUI) {
        this._turnUI = value;
    }

    private _damage: number;

    get damage(): number {
        return this._damage;
    }

    set damage(value: number) {
        this._damage = value;
    }

    private _stagingArea: StageZone;

    get stagingArea(): StageZone {
        return this._stagingArea;
    }

    set stagingArea(value: StageZone) {
        this._stagingArea = value;
    }

    addDamage() {
        this._damage += 1;
    }

    removeDamage() {
        this._damage -= 1;
    }
}
