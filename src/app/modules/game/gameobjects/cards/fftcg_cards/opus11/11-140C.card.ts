import {Scene} from 'phaser';
import FFTCGForward from '../../card_forward';

export default class Yazoo11 extends FFTCGForward {
    protected _serialNumber = '11-140C';

    constructor(scene: Scene) {
        super(scene);
    }
}