import {BaseZone} from './Base.zone';
import {ICardGameZone} from './Deck.zone';

export default class BackupZone extends BaseZone implements ICardGameZone {
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
