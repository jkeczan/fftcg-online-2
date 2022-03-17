import ForwardZone from './forward.zone';
import BackupZone from './backup.zone';
import {IGameZoneConfig} from './base.zone';
import Container = Phaser.GameObjects.Container;
import Graphics = Phaser.GameObjects.Graphics;


interface IFieldConfig extends IGameZoneConfig {
    name: string;
    opponent: boolean;
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
            name: config.opponent ? 'Opponent_Forward' : 'Forward',
            width: width * .95,
            height: height * .4,
            borderColor: 0x0000ff,
            opponent: config.opponent
        });
        const backupZone = new BackupZone({
            scene,
            x,
            y: y + height / 4,
            name: config.opponent ? 'Opponent_Backup' : 'Backup',
            width: width * .95,
            height: height * .4,
            borderColor: 0x00ff00,
            opponent: config.opponent
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
