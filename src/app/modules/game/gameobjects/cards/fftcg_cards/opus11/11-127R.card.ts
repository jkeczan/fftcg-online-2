import {FFTCGCardElement, FFTCGCardRarity, FFTCGCardType, IFFTCGForwardMetadata} from '../../card_fftcg';
import FFTCGForward from '../../card_forward';

export default class Kadaj11 extends FFTCGForward {
    protected metadata: IFFTCGForwardMetadata = {
        cost: 2,
        cardType: FFTCGCardType.Forward,
        elements: [FFTCGCardElement.ICE],
        serialNumber: '11-127R',
        jobs: ['Remnant'],
        categories: [],
        powerLevel: 6000,
        effectText: null,
        effects: null,
        isExBurst: false,
        rarity: FFTCGCardRarity.RARE,
        isMultiPlay: false
    };
}