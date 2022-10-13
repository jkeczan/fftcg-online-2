import {Scene} from 'phaser';
import {GameCard} from '../../../server/states/GameCard';
import FFTCGCard from '../card_fftcg';
import LightningSummoner from './opus1/1-138C.card';
import Magus from './opus1/1-140C.card';
import Elena11 from './opus11/11-088R.card';
import Rude11 from './opus11/11-104R.card';
import Reno11 from './opus11/11-105R.card';
import Kadaj11 from './opus11/11-127R.card';
import Yazoo11 from './opus11/11-140C.card';
import Loz11 from './opus11/11-142C.card';
import Tseng from './opus15/15-135S.card';
import PresidentShinra from './opus15/15-136S.card';
import Rude from './opus15/15-137S.card';
import Reno from './opus15/15-138S.card';
import Rufus from './opus15/15-140S.card';
import LightningBlackMage from './opus2/2-108C.card';
import BardOpus4 from './opus4/4-027C.card';
import Hades from './opus6/6-038R.card';
import Ramuh from './opus6/6-102R.card';
import Bard from './opus8/8-029C.card';
import LightningBlackMageOpus8 from './opus8/8-095C.card';

export default class CardFactory {

    private static SERIAL_MAP = {
        '15-140S': Rufus,
        '15-135S': Tseng,
        '15-136S': PresidentShinra,
        '15-137S': Rude,
        '15-138S': Reno,
        '11-088R': Elena11,
        '11-104R': Rude11,
        '11-105R': Reno11,
        '11-027R': Kadaj11,
        '11-040C': Yazoo11,
        '11-042C': Loz11,
        '8-029C': Bard,
        '1-138C': LightningSummoner,
        '2-108C': LightningBlackMage,
        '8-095C': LightningBlackMageOpus8,
        '1-040C': Magus,
        '4-027C': BardOpus4,
        '4-030C': LightningSummoner,
        '6-102R': Ramuh,
        '6-038R': Hades
    };


    static async getCard(scene: Scene, serialNumber: string, cardState?: GameCard): Promise<FFTCGCard> {
        const clazz = this.SERIAL_MAP[serialNumber];
        if (clazz) {
            const type: (new (scene: Scene) => FFTCGCard) = clazz;
            const card = this.factory(type, scene);
            card.cardState = cardState;
            await card.setupSprites();
            return card;
        } else {
            console.log('No card found for serial ', serialNumber);
        }
    }

    static factory<T extends FFTCGCard>(type: { new(scene): T }, scene: Scene): FFTCGCard {
        return new type(scene);
    }
}
