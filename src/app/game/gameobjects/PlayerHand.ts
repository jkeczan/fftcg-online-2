import {ICardGameZone} from './PlayerDeck';
import {GameZone, IGameZoneConfig} from './GameZone';


export default class PlayerHand extends GameZone implements ICardGameZone {
    constructor(config: IGameZoneConfig) {
        super(config);
    }

    shouldBeShown(): boolean {
        return true;
    }

    shouldStack(): boolean {
        return false;
    }

    shouldBeSideways(): boolean {
        return false;
    }
}
