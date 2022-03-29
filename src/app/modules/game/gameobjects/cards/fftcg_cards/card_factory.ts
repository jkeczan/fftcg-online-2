import {Scene} from 'phaser';
import FFTCGCard from '../card_fftcg';
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
        '11-042C': Loz11
    };

    static getCard(scene: Scene, serialNumber: string): FFTCGCard {
        const clazz = this.SERIAL_MAP[serialNumber];
        if (clazz) {
            const type: (new (scene: Scene) => FFTCGCard) = clazz;
            const card = this.factory(type, scene);
            card.setupSprites();
            return card;
        } else {
            console.error('No card found for serial ', serialNumber);
        }
    }

    static factory<T extends FFTCGCard>(type: { new(scene): T }, scene: Scene): FFTCGCard {
        return new type(scene);
    }
}
