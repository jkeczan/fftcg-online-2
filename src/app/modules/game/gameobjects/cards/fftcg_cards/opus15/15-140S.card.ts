import {FFTCGCardElement, FFTCGCardRarity, FFTCGCardType, IFFTCGForwardMetadata} from '../../card_fftcg';
import FFTCGForward from '../../card_forward';

export default class Rufus extends FFTCGForward {
    public metadata: IFFTCGForwardMetadata = {
        cost: 4,
        cardType: FFTCGCardType.Forward,
        elements: [FFTCGCardElement.LIGHTNING, FFTCGCardElement.ICE],
        serialNumber: '15-140S',
        jobs: [],
        categories: [],
        powerLevel: 0,
        effectText: null,
        effects: null,
        isExBurst: false,
        rarity: FFTCGCardRarity.STARTER,
        isMultiPlay: false
    };
}
