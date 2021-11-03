import {GameZone} from './GameZone';
import {ICardGameZone} from './PlayerDeck';

export default class PlayerBackupField extends GameZone implements ICardGameZone {
    constructor(data) {
        super(data);
    }

    shouldBeShown(): boolean {
        return true;
    }

    shouldBeSideways(): boolean {
        return false;
    }

    shouldStack(): boolean {
        return false;
    }
}
