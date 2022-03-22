import Container = Phaser.GameObjects.Container;
import GameObject = Phaser.GameObjects.GameObject;
import FFTCGCard from '../cards/fftcg_card';
import {IGameZoneConfig} from './base.zone';

export interface IContainerConfig extends IGameZoneConfig {
    children: Array<GameObject>;
}

export default class BaseContainer extends Container {
    constructor(config: IContainerConfig) {
        const {scene, x, y, children} = config;

        super(scene, x, y, [...children]);
    }
}
