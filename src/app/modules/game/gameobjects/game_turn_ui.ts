import Container = Phaser.GameObjects.Container;
import Shape = Phaser.GameObjects.Shape;
import Graphics = Phaser.GameObjects.Graphics;
import {IGameZoneConfig} from './zones/base.zone';
import {Scene} from 'phaser';
import Text = Phaser.GameObjects.Text;

export interface IGameTurnConfig {
    scene: Scene;
    x: number;
    y: number;
    name: string;
    borderColor?: number;
    fillColor?: number;
    shape?: Shape;
    radians: number;
}

export class GameTurn extends Container {
    private _borderColor: number;
    private _fillColor: number;
    private _shape: Shape;
    private _radians: number;
    private _border: Graphics;
    private _label: Text;

    constructor(config: IGameTurnConfig) {
        const {scene, borderColor, fillColor, radians, name} = config;

        const border = new Graphics(scene);
        const label = new Text(scene,
            0,
            0,
            name.substr(0, 1),
            {});

        super(scene, 0, 0, [border, label]);

        this._border = border;
        this._borderColor = borderColor;
        this._fillColor = fillColor;
        this._radians = radians;
        this._label = label;

        this.createBorder(borderColor);
        this.createLabel();

    }

    createLabel(): void {
        this.label.x -= this.label.width / 2;
        this.bringToTop(this.label);
    }

    showIndicator() {
        this._border.fillStyle(this.fillColor, .8);
        this._border.fillCircle(this.originX, this.originY, this.radians);
    }

    hideIndicator() {
        this._border.clear();
        this.createBorder(this.borderColor);
    }

    createBorder(color: number = 0xA020F0) {
        this._border.lineStyle(10, color, .5);
        this._border.strokeCircle(this.originX, this.originY, this.radians);

        this.bringToTop(this._border);
    }


    get borderColor(): number {
        return this._borderColor;
    }

    set borderColor(value: number) {
        this._borderColor = value;
    }

    get shape(): Phaser.GameObjects.Shape {
        return this._shape;
    }

    set shape(value: Phaser.GameObjects.Shape) {
        this._shape = value;
    }

    get radians(): number {
        return this._radians;
    }

    set radians(value: number) {
        this._radians = value;
    }

    get border(): Phaser.GameObjects.Graphics {
        return this._border;
    }

    set border(value: Phaser.GameObjects.Graphics) {
        this._border = value;
    }

    get fillColor(): number {
        return this._fillColor;
    }

    set fillColor(value: number) {
        this._fillColor = value;
    }

    get label(): Phaser.GameObjects.Text {
        return this._label;
    }

    set label(value: Phaser.GameObjects.Text) {
        this._label = value;
    }
}

export default class GameTurnUI extends Container {
    private _border: Graphics;
    private phases: Array<GameTurn>;

    constructor(config: IGameZoneConfig) {
        const {scene, x, y, width, height, name, borderColor} = config;
        const activePhase = new GameTurn({
            scene,
            x,
            y,
            radians: height / 2,
            name: GameTurnKey.ACTIVE,
            borderColor: 0xA020F0,
            fillColor: 0xff0000
        });
        const drawPhase = new GameTurn({
            scene,
            x,
            y,
            radians: height / 2,
            name: GameTurnKey.DRAW,
            fillColor: 0xff0000
        });
        const mainPhase1 = new GameTurn({
            scene,
            x,
            y,
            radians: height / 2,
            name: GameTurnKey.MAIN_1,
            fillColor: 0xff0000
        });
        const attackPhase = new GameTurn({
            scene,
            x,
            y,
            radians: height / 2,
            name: GameTurnKey.ATTACK,
            fillColor: 0xff0000
        });
        // const attackPrep = new GameTurn({
        //     scene,
        //     x,
        //     y,
        //     radians: height / 2,
        //     name: 'Attack Prep'
        // });
        // const blockPrep = new GameTurn({
        //     scene,
        //     x,
        //     y,
        //     radians: height / 2,
        //     name: 'Block Prep'
        // });
        const mainPhase2 = new GameTurn({
            scene,
            x,
            y,
            radians: height / 2,
            name: GameTurnKey.MAIN_2,
            fillColor: 0xff0000
        });
        const endPhase = new GameTurn({
            scene,
            x,
            y,
            radians: height / 2,
            name: GameTurnKey.END,
            fillColor: 0xff0000
        });

        const border = new Graphics(scene);

        super(scene, x, y, [border]);

        this.phases = [];
        this.phases.push(activePhase);
        this.phases.push(drawPhase);
        this.phases.push(mainPhase1);
        this.phases.push(attackPhase);
        // this.phases.push(attackPrep);
        // this.phases.push(blockPrep);
        this.phases.push(mainPhase2);
        this.phases.push(endPhase);

        this.add(this.phases);

        this.name = name;
        this.width = width;
        this.height = height;
        this._border = border;

        this.createBorder(borderColor);
        this.layoutPhases();
        // this.simulateTurnSwitch();

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
            phase.width = turnWidth;
            phase.height = this.height;
            phase.x -= startingPos - (turnWidth / 2) - (turnWidth * i);
            phase.y = 0;
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

    createBorder(color: number = 0xA020F0) {
        this._border.lineStyle(10, color, .5);
        this._border.strokeRect(this.originX - (this.width / 2), this.originY - (this.height / 2), this.width, this.height);

        this.bringToTop(this._border);
    }

    get border(): Phaser.GameObjects.Graphics {
        return this._border;
    }

    set border(value: Phaser.GameObjects.Graphics) {
        this._border = value;
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
