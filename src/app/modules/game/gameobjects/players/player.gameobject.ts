import HandZone from '../zones/hand.zone';
import DamageZone from '../zones/damage.zone';
import DeckZone from '../zones/deck.zone';
import BreakZone from '../zones/break.zone';
import PlayerFieldZone from '../zones/player_field.zone';
import RemoveFromGameZone from '../zones/remove_from_game.zone';

export interface IPlayerConfig {
    hand?: HandZone;
    damageZone?: DamageZone;
    deck?: DeckZone;
    breakZone?: BreakZone;
    field?: PlayerFieldZone;
    removedFromGame?: RemoveFromGameZone;
}

export default class Player {
    private _hand: HandZone;
    private _damageZone: DamageZone;
    private _deck: DeckZone;
    private _breakZone: BreakZone;
    private _field: PlayerFieldZone;
    private _removedFromGame: RemoveFromGameZone;
    private damage: number;

    constructor(config: IPlayerConfig) {
        this._hand = config.hand;
        this._damageZone = config.damageZone;
        this._deck = config.deck;
        this._breakZone = config.breakZone;
        this._field = config.field;
        this._removedFromGame = config.removedFromGame;
    }

    addDamage() {
        this.damage += 1;
    }

    removeDamage() {
        this.damage -= 1;
    }

    get hand(): HandZone {
        return this._hand;
    }

    set hand(value: HandZone) {
        this._hand = value;
    }

    get deck(): DeckZone {
        return this._deck;
    }

    set deck(value: DeckZone) {
        this._deck = value;
    }

    get breakZone(): BreakZone {
        return this._breakZone;
    }

    set breakZone(value: BreakZone) {
        this._breakZone = value;
    }

    get field(): PlayerFieldZone {
        return this._field;
    }

    set field(value: PlayerFieldZone) {
        this._field = value;
    }

    get removedFromGame(): RemoveFromGameZone {
        return this._removedFromGame;
    }

    set removedFromGame(value: RemoveFromGameZone) {
        this._removedFromGame = value;
    }


    get damageZone(): DamageZone {
        return this._damageZone;
    }

    set damageZone(value: DamageZone) {
        this._damageZone = value;
    }
}
