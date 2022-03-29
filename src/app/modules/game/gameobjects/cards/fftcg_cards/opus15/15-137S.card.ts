import {Scene} from 'phaser';
import FFTCGForward from '../../card_forward';

export default class Rude extends FFTCGForward {
    protected _serialNumber = '15-137S';

    constructor(scene: Scene) {
        super(scene);
    }
}