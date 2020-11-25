import {GameZone} from './GameZone';
import {ICardGameZone} from './PlayerDeck';

export default class PlayerFowardZone extends GameZone implements ICardGameZone {
    constructor(data) {
        super(data);
    }

    shouldBeShown(): boolean {
        return true;
    }
}
