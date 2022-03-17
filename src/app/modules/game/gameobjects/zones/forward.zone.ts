import {BaseZone, IGameZoneConfig} from './base.zone';
import {ICardGameZone} from './deck.zone';
import CardDraggable from '../cards/card_draggable';
import FFTCGCard from '../cards/fftcg_card';

export default class ForwardZone extends BaseZone implements ICardGameZone {
    constructor(config: IGameZoneConfig) {
        super(config);
    }

    orientCard(card: FFTCGCard) {
        super.orientCard(card);
        card.flipForward();
        card.untap();
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
