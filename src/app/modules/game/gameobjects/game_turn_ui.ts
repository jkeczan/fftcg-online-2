import Container = Phaser.GameObjects.Container;
import Graphics = Phaser.GameObjects.Graphics;
import Text = Phaser.GameObjects.Text;
import Sprite = Phaser.GameObjects.Sprite;
import {IGameZoneConfig} from './zones/base.zone';
import {Scene} from 'phaser';
import BorderContainer from './border_container';

export interface IGameTurnConfig {
    scene: Scene;
    x: number;
    y: number;
    name: string;
    inactiveTexture: string;
    inactiveFrame: string;
    activeTexture: string;
    activeFrame: string;
}

export class GameTurn extends Container {
    private _label: Text;
    private _inactiveSprite: Sprite;
    private _activeSprite: Sprite;

    constructor(config: IGameTurnConfig) {
        const {scene, name, activeFrame, inactiveFrame, activeTexture, inactiveTexture} = config;
        const label = new Text(scene,
            0,
            0,
            name.substr(0, 1),
            {fontFamily: 'Ken Vector'});
        const inactiveSprite = new Sprite(scene, 0, 0, inactiveTexture, inactiveFrame);
        const activeSprite = new Sprite(scene, 0, 0, activeTexture, activeFrame);

        super(scene, 0, 0, [label, inactiveSprite, activeSprite]);

        this._label = label;
        this.inactiveSprite = inactiveSprite;
        this.activeSprite = activeSprite;
        this.createLabel();
        this.hideIndicator();
    }

    createLabel(): void {
        this.label.x -= this.label.width / 2;
        this.label.y += this._label.height;
        this.bringToTop(this.label);
    }

    showIndicator() {
        this.activeSprite.visible = true;
        this.inactiveSprite.visible = false;
    }

    hideIndicator() {
        this.activeSprite.visible = false;
        this.inactiveSprite.visible = true;
    }

    get label(): Phaser.GameObjects.Text {
        return this._label;
    }

    set label(value: Phaser.GameObjects.Text) {
        this._label = value;
    }

    get inactiveSprite(): Phaser.GameObjects.Sprite {
        return this._inactiveSprite;
    }

    set inactiveSprite(value: Phaser.GameObjects.Sprite) {
        this._inactiveSprite = value;
    }

    get activeSprite(): Phaser.GameObjects.Sprite {
        return this._activeSprite;
    }

    set activeSprite(value: Phaser.GameObjects.Sprite) {
        this._activeSprite = value;
    }
}

export default class GameTurnUI extends BorderContainer {
    private phases: Array<GameTurn>;

    constructor(config: IGameZoneConfig) {
        const {scene, x, y, width, height, name, borderColor} = config;
        const activePhase = new GameTurn({
            scene,
            x,
            y,
            name: GameTurnKey.ACTIVE,
            inactiveTexture: 'greyUI',
            inactiveFrame: 'grey_box.png',
            activeTexture: 'blueUI',
            activeFrame: 'blue_button10.png'
        });
        const drawPhase = new GameTurn({
            scene,
            x,
            y,
            name: GameTurnKey.DRAW,
            inactiveTexture: 'greyUI',
            inactiveFrame: 'grey_box.png',
            activeTexture: 'blueUI',
            activeFrame: 'blue_button10.png'
        });
        const mainPhase1 = new GameTurn({
            scene,
            x,
            y,
            name: GameTurnKey.MAIN_1,
            inactiveTexture: 'greyUI',
            inactiveFrame: 'grey_box.png',
            activeTexture: 'blueUI',
            activeFrame: 'blue_button10.png'
        });
        const attackPhase = new GameTurn({
            scene,
            x,
            y,
            name: GameTurnKey.ATTACK,
            inactiveTexture: 'greyUI',
            inactiveFrame: 'grey_box.png',
            activeTexture: 'blueUI',
            activeFrame: 'blue_button10.png'
        });
        const mainPhase2 = new GameTurn({
            scene,
            x,
            y,
            name: GameTurnKey.MAIN_2,
            inactiveTexture: 'greyUI',
            inactiveFrame: 'grey_box.png',
            activeTexture: 'blueUI',
            activeFrame: 'blue_button10.png'
        });
        const endPhase = new GameTurn({
            scene,
            x,
            y,
            name: GameTurnKey.END,
            inactiveTexture: 'greyUI',
            inactiveFrame: 'grey_box.png',
            activeTexture: 'blueUI',
            activeFrame: 'blue_button10.png'
        });


        const phases = [];
        phases.push(activePhase);
        phases.push(drawPhase);
        phases.push(mainPhase1);
        phases.push(attackPhase);
        phases.push(mainPhase2);
        phases.push(endPhase);

        super({
            scene,
            x,
            y,
            width,
            height,
            borderColor: 0xff0000
        });

        this.add(phases);

        this.phases = phases;
        this.name = name;
        this.width = width;
        this.height = height;


        this.layoutPhases();
        this.scene.add.existing(this);
    }

    layoutPhases() {
        const turnWidth = this.width / this.phases.length;
        const startingPos = this.width / 2;
        const endingPos = this.width * 2;
        const diff = endingPos - startingPos;
        const spacing = diff / this.phases.length;

        for (let i = 0; i < this.phases.length; i++) {
            const phase = this.phases[i];
            phase.width = turnWidth / 2;
            phase.height = this.height;
            phase.x -= startingPos - (turnWidth / 2) - (turnWidth * i);
            phase.y -= this.height / 2;
            phase.activeSprite.y += this.height / 2;
            phase.inactiveSprite.y += this.height / 2;
            // phase.createBorder(0xffffff);
        }
    }

    async simulateTurnSwitch() {
        for (let i = 0; i < this.phases.length + 1; i++) {
            const newPhase = this.phases[i];
            const oldPhase = this.phases[i - 1];

            if (newPhase) {
                newPhase.showIndicator();
            }

            if (oldPhase) {
                oldPhase.hideIndicator();
            }

            await this.delayTime(1000);
        }
    }

    async delayTime(delay: number) {
        return new Promise((resolve, reject) => {
            this.scene.time.delayedCall(delay, () => {
                resolve(true);
            });
        });
    }

    get activePhase(): GameTurn {
        return this.phases[0];
    }

    get drawPhase(): GameTurn {
        return this.phases[1];
    }

    get mainPhase1(): GameTurn {
        return this.phases[2];
    }

    get attackPhase(): GameTurn {
        return this.phases[3];
    }

    get mainPhase2(): GameTurn {
        return this.phases[4];
    }

    get endPhase(): GameTurn {
        return this.phases[5];
    }
}

export enum GameTurnKey {
    ACTIVE = 'Active Phase',
    DRAW = 'Draw Phase',
    MAIN_1 = 'Main Phase 1',
    ATTACK = 'Attack Phase',
    MAIN_2 = 'Main Phase 2',
    END = 'End Phase'
}
