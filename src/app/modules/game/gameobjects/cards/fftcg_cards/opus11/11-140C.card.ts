import {FFTCGCardElement, FFTCGCardRarity, FFTCGCardType, IFFTCGForwardMetadata} from '../../card_fftcg';
import FFTCGForward from '../../card_forward';

export default class Yazoo11 extends FFTCGForward {
    protected metadata: IFFTCGForwardMetadata = {
        cost: 4,
        cardType: FFTCGCardType.Forward,
        elements: [FFTCGCardElement.ICE],
        serialNumber: '11-140C',
        jobs: ['Remnant'],
        categories: [],
        powerLevel: 5000,
        effectText: null,
        effects: null,
        isExBurst: false,
        rarity: FFTCGCardRarity.COMMON,
        isMultiPlay: false
    };
}