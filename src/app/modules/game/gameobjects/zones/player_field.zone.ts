import ForwardZone from './forward.zone';
import BackupZone from './backup.zone';
import {BaseZone, IGameZoneConfig} from './base.zone';
import FFTCGCard, {FFTCGCardType} from '../cards/fftcg_card';
import Graphics = Phaser.GameObjects.Graphics;


interface IFieldConfig extends IGameZoneConfig {
    name: string;
    opponent: boolean;
}

export default class PlayerFieldZone extends BaseZone {
    public forwardZone: ForwardZone;
    public backupZone: BackupZone;

    constructor(config: IFieldConfig) {
        const {scene, x, y, name, width, height} = config;
        const forwardZone = new ForwardZone({
            scene,
            x,
            y: config.opponent ? y + height / 4 : y - height / 4,
            name: config.opponent ? 'Opponent_Forward' : 'Forward',
            width: width * .95,
            height: height * .4,
            borderColor: 0x0000ff,
            opponent: config.opponent
        });
        const backupZone = new BackupZone({
            scene,
            x,
            y: config.opponent ? y - height / 4 : y + height / 4,
            name: config.opponent ? 'Opponent_Backup' : 'Backup',
            width: width * .95,
            height: height * .4,
            borderColor: 0x00ff00,
            opponent: config.opponent
        });
        const border = new Graphics(scene);

        super(config);

        this.width = width;
        this.height = height;

        this.forwardZone = forwardZone;
        this.backupZone = backupZone;
        this.border = border;

        this.createBorder();
        this.forwardZone.disableInteractive();
        this.backupZone.disableInteractive();

        this.scene.add.existing(this);
    }

    onDropped(card: FFTCGCard) {
        super.onDropped(card);
    }

    alignCardsInZone(cardAdded: FFTCGCard) {

    }

    onCardAdded(card: FFTCGCard) {
        this.orientCard(card);
        if (card.cardType === FFTCGCardType.Forward) {
            this.forwardZone.addCard(card);
        } else if (card.cardType === FFTCGCardType.Backup) {
            this.backupZone.addCard(card);
        }

        this.removeCard(card);
    }
}
