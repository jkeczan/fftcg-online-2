import FFTCGCard, {FFTCGCardElement, FFTCGCardRarity, FFTCGCardType, IFFTCGCardMetadata} from '../../card_fftcg';

export default class Bard extends FFTCGCard {
    protected metadata: IFFTCGCardMetadata = {
        cost: 2,
        cardType: FFTCGCardType.Backup,
        elements: [FFTCGCardElement.ICE],
        serialNumber: '4-030C',
        jobs: ['Standard Unit'],
        categories: ['XIV'],
        effectText: null,
        effects: [],
        isExBurst: false,
        rarity: FFTCGCardRarity.COMMON,
        isMultiPlay: false
    };

}