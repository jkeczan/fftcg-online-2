import {Scene} from 'phaser';
import FFTCGForward from '../../card_forward';

export default class Tseng extends FFTCGForward {
    protected _serialNumber = '15-135S';

    constructor(scene: Scene) {
        super(scene);
    }
}