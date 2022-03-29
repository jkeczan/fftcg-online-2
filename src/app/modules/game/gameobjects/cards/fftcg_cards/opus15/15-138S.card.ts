import {Scene} from 'phaser';
import FFTCGForward from '../../card_forward';

export default class Reno extends FFTCGForward {
    protected _serialNumber = '15-138S';

    constructor(scene: Scene) {
        super(scene);
    }
}