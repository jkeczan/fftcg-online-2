import FFTCGCard, {FFTCGCardElement, FFTCGCardRarity, FFTCGCardType, IFFTCGForwardMetadata} from '../../card_fftcg';

export default class LightningSummoner extends FFTCGCard {
    protected metadata: IFFTCGForwardMetadata = {
        cost: 1,
        cardType: FFTCGCardType.Backup,
        elements: [FFTCGCardElement.LIGHTNING],
        serialNumber: '1-138C',
        jobs: ['Standard Unit'],
        categories: ['FFT'],
        powerLevel: null,
        effectText: null,
        effects: [],
        isExBurst: false,
        rarity: FFTCGCardRarity.COMMON,
        isMultiPlay: false
    };

}