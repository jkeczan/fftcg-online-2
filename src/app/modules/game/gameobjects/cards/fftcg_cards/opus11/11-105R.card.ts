import {Scene} from 'phaser';
import FFTCGForward from '../../card_forward';

export default class Reno11 extends FFTCGForward {
    protected _serialNumber = '11-105R';

    constructor(scene: Scene) {
        super(scene);
    }
}