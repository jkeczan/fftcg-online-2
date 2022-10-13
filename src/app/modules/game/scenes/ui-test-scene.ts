import {Scene} from 'phaser';
import GameButton from '../ui/button';


export class UITestScene extends Scene {

    private texturePack: 'redUI' | 'blueUI' | 'greyUI';

    constructor(config: string | Phaser.Types.Scenes.SettingsConfig) {
        super('UITestScene');
    }

    preload() {
        this.load.atlasXML('blueUI', 'assets/uipack/Spritesheet/blueSheet.png', 'assets/uipack/Spritesheet/blueSheet.xml');
        this.load.atlasXML('greyUI', 'assets/uipack/Spritesheet/greySheet.png', 'assets/uipack/Spritesheet/greySheet.xml');
        this.load.atlasXML('redUI', 'assets/uipack/Spritesheet/redSheet.png', 'assets/uipack/Spritesheet/redSheet.xml');
    }

    create() {
        this.add.existing(new GameButton(this, 100, 100, 'Test', {
            textureDown: 'redUI',
            frameDown: 'red_button00.png',
            textureUp: 'blueUI',
            frameUp: 'blue_button05.png',
            textureOver: 'greyUI',
            frameOver: 'grey_button05.png'
        }));

        this.add.existing(new GameButton(this, 100, 200, 'Test', {
            textureDown: 'blueUI',
            frameDown: 'blue_button05.png',
            textureUp: 'redUI',
            frameUp: 'red_button00.png',
            textureOver: 'greyUI',
            frameOver: 'grey_button05.png'
        }));

    }
}
