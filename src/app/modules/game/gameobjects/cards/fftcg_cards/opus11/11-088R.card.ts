import {FFTCGCardElement, FFTCGCardRarity, FFTCGCardType, IFFTCGForwardMetadata} from '../../card_fftcg';
import FFTCGForward from '../../card_forward';

export default class Elena11 extends FFTCGForward {
    protected metadata: IFFTCGForwardMetadata = {
        cost: 2,
        cardType: FFTCGCardType.Forward,
        elements: [FFTCGCardElement.LIGHTNING],
        serialNumber: '11-088R',
        jobs: ['Member of the Turks'],
        categories: ['VII'],
        powerLevel: 5000,
        effectText: null,
        effects: [],
        isExBurst: false,
        rarity: FFTCGCardRarity.RARE,
        isMultiPlay: false
    };
}
