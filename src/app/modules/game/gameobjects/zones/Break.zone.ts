import {BaseZone, IGameZoneConfig} from './Base.zone';
import {ICardGameZone} from './Deck.zone';
import FFTCGCard from '../FftcgCard';

export default class BreakZone extends BaseZone implements ICardGameZone {
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
