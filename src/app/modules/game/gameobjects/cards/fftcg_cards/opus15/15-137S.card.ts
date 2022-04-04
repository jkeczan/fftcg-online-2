import {FFTCGCardElement, FFTCGCardRarity, FFTCGCardType, IFFTCGForwardMetadata} from '../../card_fftcg';
import FFTCGForward from '../../card_forward';

export default class Rude extends FFTCGForward {
    protected metadata: IFFTCGForwardMetadata = {
        cost: 3,
        cardType: FFTCGCardType.Forward,
        elements: [FFTCGCardElement.LIGHTNING],
        serialNumber: '15-137S',
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