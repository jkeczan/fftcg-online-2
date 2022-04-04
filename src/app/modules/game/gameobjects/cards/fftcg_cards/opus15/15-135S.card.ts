import {FFTCGCardElement, FFTCGCardRarity, FFTCGCardType, IFFTCGForwardMetadata} from '../../card_fftcg';
import FFTCGForward from '../../card_forward';

export default class Tseng extends FFTCGForward {
    protected metadata: IFFTCGForwardMetadata = {
        cost: 4,
        cardType: FFTCGCardType.Forward,
        elements: [FFTCGCardElement.LIGHTNING],
        serialNumber: '15-135S',
        jobs: [],
        categories: [],
        powerLevel: 8000,
        effectText: null,
        effects: null,
        isExBurst: false,
        rarity: FFTCGCardRarity.STARTER,
        isMultiPlay: false
    };
}