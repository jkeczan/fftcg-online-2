import FFTCGCard, {FFTCGCardElement, FFTCGCardRarity, FFTCGCardType, IFFTCGCardMetadata} from '../../card_fftcg';

export default class Ramuh extends FFTCGCard {
    public metadata: IFFTCGCardMetadata = {
        cost: 3,
        cardType: FFTCGCardType.Summon,
        elements: [FFTCGCardElement.LIGHTNING],
        serialNumber: '6-102R',
        jobs: [],
        categories: ['Mobius', 'VII'],
        effectText: null,
        effects: [],
        isExBurst: false,
        rarity: FFTCGCardRarity.RARE,
        isMultiPlay: false
    };

}
