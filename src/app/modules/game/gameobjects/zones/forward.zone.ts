import FFTCGCard from '../cards/fftcg_card';
import {BaseZone, ICardGameZone, IGameZoneConfig} from './base.zone';

export default class ForwardZone extends BaseZone implements ICardGameZone {
    protected cardScale = .7;

    constructor(config: IGameZoneConfig) {
        super(config);
    }

    orientCard(card: FFTCGCard) {
        super.orientCard(card);
        card.flipForward();

        if (this.inverted) {
            card.rotateCard(180);
        } else {
            card.rotateCard(0);
        }
    }

    createBorder(color: number = 0x3e3e3e, lineWidth: number = 10, alpha: number = .5) {

    }

    createLabel() {

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
