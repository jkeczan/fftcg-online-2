import {GameZone, IGameZoneConfig} from './GameZone';
import {ICardGameZone} from './PlayerDeck';

export default class PlayerDamageZone extends GameZone implements ICardGameZone {
    constructor(config: IGameZoneConfig) {
        super(config);
    }

    shouldBeShown(): boolean {
        return true;
    }

    shouldBeSideways(): boolean {
        return true;
    }

    shouldStack(): boolean {
        return false;
    }
}
