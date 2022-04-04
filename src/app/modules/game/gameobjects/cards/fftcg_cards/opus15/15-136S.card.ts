import {Scene} from 'phaser';
import {FFTCGCardElement, FFTCGCardRarity, FFTCGCardType, IFFTCGCardMetadata} from '../../card_fftcg';
import FFTCGForward from '../../card_forward';

export default class PresidentShinra extends FFTCGForward {
    protected metadata: IFFTCGCardMetadata = {
        cost: 4,
        cardType: FFTCGCardType.Backup,
        elements: [FFTCGCardElement.LIGHTNING],
        serialNumber: '15-136S',
        jobs: ['President of Shinra'],
        categories: ['VII'],
        effectText: null,
        effects: [],
        isExBurst: true,
        rarity: FFTCGCardRarity.STARTER,
        isMultiPlay: false
    };

    constructor(scene: Scene) {
        super(scene);
    }
}