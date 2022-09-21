import FFTCGCard, {FFTCGCardElement, FFTCGCardRarity, FFTCGCardType, IFFTCGCardMetadata} from '../../card_fftcg';

export default class Magus extends FFTCGCard {
    protected metadata: IFFTCGCardMetadata = {
        cost: 1,
        cardType: FFTCGCardType.Backup,
        elements: [FFTCGCardElement.LIGHTNING],
        serialNumber: '1-140C',
        jobs: ['Standard Unit'],
        categories: ['III'],
        effectText: null,
        effects: [],
        isExBurst: false,
        rarity: FFTCGCardRarity.COMMON,
        isMultiPlay: false
    };

}