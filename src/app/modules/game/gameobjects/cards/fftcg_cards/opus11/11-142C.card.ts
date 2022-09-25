import {FFTCGCardElement, FFTCGCardRarity, FFTCGCardType, IFFTCGForwardMetadata} from '../../card_fftcg';
import FFTCGForward from '../../card_forward';

export default class Loz11 extends FFTCGForward {
    public metadata: IFFTCGForwardMetadata = {
        cost: 3,
        cardType: FFTCGCardType.Forward,
        elements: [FFTCGCardElement.ICE],
        serialNumber: '11-142C',
        jobs: ['Remnant'],
        categories: [],
        powerLevel: 8000,
        effectText: null,
        effects: null,
        isExBurst: false,
        rarity: FFTCGCardRarity.COMMON,
        isMultiPlay: false
    };
}
