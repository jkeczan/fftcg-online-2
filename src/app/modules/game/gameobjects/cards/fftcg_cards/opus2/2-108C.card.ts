import FFTCGCard, {FFTCGCardElement, FFTCGCardRarity, FFTCGCardType, IFFTCGForwardMetadata} from '../../card_fftcg';

export default class LightningBlackMage extends FFTCGCard {
    protected metadata: IFFTCGForwardMetadata = {
        cost: 2,
        cardType: FFTCGCardType.Backup,
        elements: [FFTCGCardElement.LIGHTNING],
        serialNumber: '2-108C',
        jobs: ['Standard Unit'],
        categories: ['XIV'],
        powerLevel: null,
        effectText: null,
        effects: [],
        isExBurst: false,
        rarity: FFTCGCardRarity.COMMON,
        isMultiPlay: false
    };

}