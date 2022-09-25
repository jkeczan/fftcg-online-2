import FFTCGCard, {FFTCGCardElement, FFTCGCardRarity, FFTCGCardType, IFFTCGCardMetadata} from '../../card_fftcg';

export default class BardOpus4 extends FFTCGCard {
    public metadata: IFFTCGCardMetadata = {
        cost: 2,
        cardType: FFTCGCardType.Backup,
        elements: [FFTCGCardElement.ICE],
        serialNumber: '4-027C',
        jobs: ['Standard Unit'],
        categories: ['III'],
        effectText: null,
        effects: [],
        isExBurst: false,
        rarity: FFTCGCardRarity.COMMON,
        isMultiPlay: false
    };

}
