import Vector2 = Phaser.Math.Vector2;
import Timeline = Phaser.Tweens.Timeline;
import CubicBezier = Phaser.Curves.CubicBezier;
import {Scene} from 'phaser';

export interface ICubicBeizerTween {
    target: any;
    startingPoint: Vector2;
    middleEndingPoint: Vector2;
    endingPoint: Vector2;
    scene: Scene;
}

export default class CubicBeizerTween {
    private _target: any;
    private _scene: Scene;
    private _timeline: Timeline;
    private _startingPoint: Vector2;
    private _middleEndingPoint: Vector2;
    private _endingPoint: Vector2;
    private _curve1: CubicBezier;
    private _curve2: CubicBezier;

    constructor(config: ICubicBeizerTween) {
        this._startingPoint = config.startingPoint;
        this._endingPoint = config.endingPoint;
        this._middleEndingPoint = config.middleEndingPoint;
        this._scene = config.scene;
        this._target = config.target;

        this._curve1 = this.createCurve(this.startingPoint, this.middleEndingPoint);
        this._curve2 = this.createCurve(this.middleEndingPoint, this.endingPoint);
    }

    createCurve(startingPoint: Vector2, endingPoint: Vector2): CubicBezier {
        const controlPoint1 = new Vector2(startingPoint.x - 100, startingPoint.y - 200);
        const controlPoint2 = new Vector2(startingPoint.x - 200, startingPoint.y - 100);
        return new Phaser.Curves.CubicBezier(
            startingPoint,
            controlPoint1,
            controlPoint2,
            endingPoint
        );
    }

    createTimeline() {
        const path = {t: 0, vec: new Phaser.Math.Vector2()};
        const path2 = {t: 0, vec: new Phaser.Math.Vector2()};

        if (!this.timeline) {
            this.timeline = this.scene.tweens.createTimeline();
            this.timeline.add({
                targets: path,
                t: 1,
                ease: 'Sine.easeInOut',
                duration: 500,
                onUpdate: (tween2, target: any) => {
                    const position = this.curve1.getPoint(target.t);
                    this.target.x = position.x;
                    this.target.y = position.y;
                }
            });

            this.timeline.add({
                targets: path2,
                t: 1,
                delay: 1500,
                ease: 'Sine.easeInOut',
                duration: 500,
                onUpdate: (tween2, target2: any) => {
                    const position = this.curve2.getPoint(target2.t);
                    this.target.x = position.x;
                    this.target.y = position.y;
                }
            });
        }
    }

    play() {
        if (!this.timeline) {
            this.createTimeline();
        }
        this.timeline.play();
    }

    stop() {
        if (this.timeline) {
            this.timeline.stop();
        }
    }

    get startingPoint(): Phaser.Math.Vector2 {
        return this._startingPoint;
    }

    set startingPoint(value: Phaser.Math.Vector2) {
        this._startingPoint = value;
    }

    get middleEndingPoint(): Phaser.Math.Vector2 {
        return this._middleEndingPoint;
    }

    set middleEndingPoint(value: Phaser.Math.Vector2) {
        this._middleEndingPoint = value;
    }

    get endingPoint(): Phaser.Math.Vector2 {
        return this._endingPoint;
    }

    set endingPoint(value: Phaser.Math.Vector2) {
        this._endingPoint = value;
    }

    get scene(): Phaser.Scene {
        return this._scene;
    }

    set scene(value: Phaser.Scene) {
        this._scene = value;
    }

    get timeline(): Phaser.Tweens.Timeline {
        return this._timeline;
    }

    set timeline(value: Phaser.Tweens.Timeline) {
        this._timeline = value;
    }

    get curve1(): Phaser.Curves.CubicBezier {
        return this._curve1;
    }

    set curve1(value: Phaser.Curves.CubicBezier) {
        this._curve1 = value;
    }

    get curve2(): Phaser.Curves.CubicBezier {
        return this._curve2;
    }

    set curve2(value: Phaser.Curves.CubicBezier) {
        this._curve2 = value;
    }

    get target(): any {
        return this._target;
    }

    set target(value: any) {
        this._target = value;
    }
}
