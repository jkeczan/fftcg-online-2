import ForwardZone from './Forward.zone';
import BackupZone from './Backup.zone';
import {Scene} from 'phaser';
import Container = Phaser.GameObjects.Container;
import Graphics = Phaser.GameObjects.Graphics;
import {ZONE_LAYOUT_SPECS} from '../../scenes/GameScene';
import {IGameZoneConfig} from './Base.zone';


interface IFieldConfig extends IGameZoneConfig {
    name: string;
}

export default class PlayerFieldZone extends Container {
    public forwardZone: ForwardZone;
    public backupZone: BackupZone;
    private border: Graphics;

    constructor(config: IFieldConfig) {
        console.log(config);
        const {scene, x, y, name, width, height} = config;
        const forwardZone = new ForwardZone({
            scene,
            x,
            y: y - height / 4,
            name: 'Forward',
            width: width * .95,
            height: height * .4,
            borderColor: 0x0000ff
        });
        const backupZone = new BackupZone({
            scene,
            x,
            y: y + height / 4,
            name: 'Backup',
            width: width * .95,
            height: height * .4,
            borderColor: 0x00ff00
        });
        const border = new Graphics(scene);

        super(scene, x, y, [border]);

        this.width = width;
        this.height = height;

        this.forwardZone = forwardZone;
        this.backupZone = backupZone;
        this.border = border;

        this.createBorder();

        this.scene.add.existing(this);
    }

    createBorder(color: number = 0xA020F0) {
        this.border.lineStyle(10, color, .5);
        this.border.strokeRect(this.originX - (this.width / 2), this.originY - (this.height / 2), this.width, this.height);

        this.bringToTop(this.border);
    }
}
