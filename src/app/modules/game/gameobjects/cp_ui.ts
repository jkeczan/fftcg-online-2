import {Scene} from 'phaser';
import {IGameZoneConfig} from './zones/base.zone';
import {FFTCGCardElement} from './cards/fftcg_card';
import Container = Phaser.GameObjects.Container;
import Shape = Phaser.GameObjects.Shape;
import Graphics = Phaser.GameObjects.Graphics;
import Text = Phaser.GameObjects.Text;
import Sprite = Phaser.GameObjects.Sprite;

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

export class CP extends Container {
    private _borderColor: number;
    private _fillColor: number;
    private _radians: number;
    private _border: Graphics;
    private _label: Text;
    private image: Sprite;
    private _filled: boolean;

    constructor(config: IGameTurnConfig) {
        const {scene, borderColor, fillColor, radians, name} = config;
        const image = new Sprite(scene, 0, 0, 'wind_cp');
        const border = new Graphics(scene);
        super(scene, 0, 0, [border, image]);

        this._border = border;
        this._borderColor = borderColor;
        this._fillColor = fillColor;
        this._radians = radians;
        this.image = image;

        this.image.displayWidth = this.radians * 2;
        this.image.displayHeight = this.radians * 2;


        this.createBorder(borderColor);
    }

    fill() {
        if (!this.filled) {
            this._border.fillStyle(0x00ff00, .8);
            this._border.fillCircle(this.originX, this.originY, this.radians * 1.2);

            this.filled = true;
        }

    }

    unfill() {
        // this._border.clear();
        // this.createBorder();
        // this.filled = false;
    }

    hideIndicator() {
        this._border.clear();
        this.createBorder(this.borderColor);
    }

    createBorder(color: number = 0x3e3e3e) {
        this._border.lineStyle(10, color, .3);
        this._border.strokeCircle(this.originX, this.originY, this.radians * 1.2);
        this._border.fillStyle(0x3e3e3e, .2);
        this._border.fillCircle(this.originX, this.originY, this.radians * 1.2);

        this.bringToTop(this._border);
    }

    get borderColor(): number {
        return this._borderColor;
    }

    set borderColor(value: number) {
        this._borderColor = value;
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

    get filled(): boolean {
        return this._filled;
    }

    set filled(value: boolean) {
        this._filled = value;
    }
}

export default class CPContainer extends Container {
    private _border: Graphics;
    private _cp: Array<CP>;

    constructor(config: IGameZoneConfig) {
        const {scene, x, y, width, height, name, borderColor} = config;
        const border = new Graphics(scene);

        super(scene, x, y, [border]);

        this._cp = [];
        this.name = name;
        this.width = width;
        this.height = height;
        this._border = border;

        this.createBorder(0xff0000);
        // this.layoutGrid();

        this.scene.add.existing(this);
    }

    createCPs(cost: number, elements: FFTCGCardElement[]) {
        for (let c = 0; c < cost; c++) {
            const newCP: CP = new CP({
                scene: this.scene,
                name: 'cp',
                radians: this.height / 2,
                x: this.x,
                y: this.y
            });
            this._cp.push(newCP);
        }

        this.add(this._cp);
        this.layoutCP();
        // this.layoutGrid();
    }

    layoutCP() {
        const maxPerRow = 6;
        const centerIndex = (this._cp.length - 1) / 2;
        let row = -1;

        for (let i = 0; i < this._cp.length; i++) {
            const turnWidth = this.height / 2;
            const shiftDirection = i < centerIndex ? -1 : 1;
            const shifts = Math.abs(centerIndex - i) % 6;
            const cp = this._cp[i];
            const newX = cp.x + shifts * shiftDirection * (turnWidth + (turnWidth / 2));
            if (i % 6 === 0) {
                row++;
            }

            cp.setScale(.5);
            if (i === centerIndex) {
                cp.x = 0;
            } else {
                cp.x = newX;
            }

            if (i % 6 >= 6) {
                cp.y += this.height / 4;
            }
        }
    }

    // layoutGrid() {
    //     console.log('Create Grid')
    //     const grid = new GridSizer(this.scene, {
    //         x: this.x,
    //         y: this.y,
    //         width: 400, height: 400,
    //         column: 8, row: 8,
    //         columnProportions: 1, rowProportions: 1,
    //         space: {
    //             // top: 20, bottom: 20, left: 10, right: 10,
    //             column: 4, row: 4
    //         },
    //         createCellContainerCallback: (scene, x, y, config) => {
    //             config.expand = true;
    //             return this.scene.add.rectangle(0, 0, 0, 0, 14, Phaser.Math.Between(0, 0x1000000));
    //         }
    //     });
    //
    //     this.scene.add.existing(grid);
    // }


    async delayTime(delay: number) {
        return new Promise((resolve, reject) => {
            this.scene.time.delayedCall(delay, () => {
                resolve(true);
            });
        });
    }

    createBorder(color: number = 0xA020F0) {
        this._border.lineStyle(10, color, .5);
        this._border.strokeRoundedRect(this.originX - (this.width / 2), this.originY - (this.height / 2), this.width, this.height);

        this._border.fillStyle(0xffffff, .7);
        this._border.fillRoundedRect(this.originX - (this.width / 2), this.originY - (this.height / 2), this.width, this.height);

        this.bringToTop(this._border);
    }

    fillNextCP(element?: FFTCGCardElement) {
        for (const cp of this.cp) {
            if (!cp.filled) {
                cp.fill();
                break;
            }
        }
    }

    clearCP() {
        for (const cp of this.cp) {
            if (!cp.filled) {
                cp.unfill();
                break;
            }
        }
    }

    get border(): Phaser.GameObjects.Graphics {
        return this._border;
    }

    set border(value: Phaser.GameObjects.Graphics) {
        this._border = value;
    }

    get cp(): Array<CP> {
        return this._cp;
    }

    set cp(value: Array<CP>) {
        this._cp = value;
    }

    get amountOfFilledCP() {
        return this.cp.filter((cp) => {
            return cp.filled;
        }).length;
    }
}
