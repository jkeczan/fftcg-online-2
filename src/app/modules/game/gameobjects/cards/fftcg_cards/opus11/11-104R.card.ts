import {FFTCGCardElement, FFTCGCardRarity, FFTCGCardType, IFFTCGForwardMetadata} from '../../card_fftcg';
import FFTCGForward from '../../card_forward';

export default class Rude11 extends FFTCGForward {
    protected metadata: IFFTCGForwardMetadata = {
        cost: 4,
        cardType: FFTCGCardType.Forward,
        elements: [FFTCGCardElement.LIGHTNING],
        serialNumber: '11-104R',
        jobs: ['Member of the Turks'],
        categories: ['VII'],
        powerLevel: 7000,
        effectText: null,
        effects: null,
        isExBurst: false,
        rarity: FFTCGCardRarity.RARE,
        isMultiPlay: false
    };
}