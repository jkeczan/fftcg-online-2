import {GameZone, IGameZoneConfig} from './GameZone';
import {ICardGameZone} from './PlayerDeck';
import FFTCGCard from './FftcgCard';

export default class PlayerBreakZone extends GameZone implements ICardGameZone {
    constructor(config: IGameZoneConfig) {
        super(config);
    }

    onDropped(card: FFTCGCard) {
        super.onDropped(card);
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
