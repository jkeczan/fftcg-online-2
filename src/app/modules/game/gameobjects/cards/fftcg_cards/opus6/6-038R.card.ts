import FFTCGCard, {FFTCGCardElement, FFTCGCardRarity, FFTCGCardType, IFFTCGCardMetadata} from '../../card_fftcg';

export default class Hades extends FFTCGCard {
    protected metadata: IFFTCGCardMetadata = {
        cost: 5,
        cardType: FFTCGCardType.Summon,
        elements: [FFTCGCardElement.ICE],
        serialNumber: '6-038R',
        jobs: [],
        categories: ['Mobius', 'VII'],
        effectText: null,
        effects: [],
        isExBurst: false,
        rarity: FFTCGCardRarity.RARE,
        isMultiPlay: false
    };

}