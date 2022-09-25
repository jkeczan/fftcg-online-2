import {FFTCGCardElement, FFTCGCardRarity, FFTCGCardType, IFFTCGForwardMetadata} from '../../card_fftcg';
import FFTCGForward from '../../card_forward';

export default class Reno extends FFTCGForward {
    public metadata: IFFTCGForwardMetadata = {
        cost: 3,
        cardType: FFTCGCardType.Forward,
        elements: [FFTCGCardElement.LIGHTNING],
        serialNumber: '15-138S',
        jobs: ['Member of the Turks'],
        categories: ['VII'],
        powerLevel: 7000,
        effectText: null,
        effects: [],
        isExBurst: false,
        rarity: FFTCGCardRarity.RARE,
        isMultiPlay: false
    };
}
