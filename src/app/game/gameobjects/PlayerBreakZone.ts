import {GameZone, IGameZoneConfig} from './GameZone';
import {ICardGameZone} from './PlayerDeck';

export default class PlayerBreakZone extends GameZone implements ICardGameZone {
    constructor(config: IGameZoneConfig) {
        super(config);
    }

    shouldBeShown(): boolean {
        return true;
    }

    shouldBeSideways(): boolean {
        return false;
    }

    shouldStack(): boolean {
        return true;
    }


}
