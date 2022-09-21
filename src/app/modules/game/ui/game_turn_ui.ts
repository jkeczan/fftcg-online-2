import Container = Phaser.GameObjects.Container;
import Sprite = Phaser.GameObjects.Sprite;
import Text = Phaser.GameObjects.Text;
import {Scene} from 'phaser';
import Button from 'phaser3-rex-plugins/plugins/input/button/Button';
import Label from 'phaser3-rex-plugins/templates/ui/label/Label';
import BorderContainer from '../gameobjects/border_container';
import {IGameZoneConfig} from '../gameobjects/zones/base.zone';
import {TurnPhases} from '../server/messages/game_messages';
import {TurnState, TurnStates} from '../states/turn.state';

export interface IGameTurnConfig {
    scene: Scene;
    id: TurnPhases;
    x: number;
    y: number;
    name: string;
    inactiveTexture: string;
    inactiveFrame: string;
    activeTexture: string;
    activeFrame: string;
}

export class GameTurn extends Container {
    public id: TurnPhases;

    constructor(config: IGameTurnConfig) {
        const {scene, id, name, activeFrame, inactiveFrame, activeTexture, inactiveTexture} = config;
        const label = new Text(scene,
            0,
            0,
            name.substr(0, 1).toLocaleUpperCase(),
            {fontFamily: 'Ken Vector'});
        const inactiveSprite = new Sprite(scene, 0, 0, inactiveTexture, inactiveFrame);
        const activeSprite = new Sprite(scene, 0, 0, activeTexture, activeFrame);

        super(scene, 0, 0, [label, inactiveSprite, activeSprite]);
        this.id = id;
        this._label = label;
        this.inactiveSprite = inactiveSprite;
        this.activeSprite = activeSprite;
        this.createLabel();
        this.hideIndicator();

    }

    private _label: Text;

    get label(): Phaser.GameObjects.Text {
        return this._label;
    }

    set label(value: Phaser.GameObjects.Text) {
        this._label = value;
    }

    private _inactiveSprite: Sprite;

    get inactiveSprite(): Phaser.GameObjects.Sprite {
        return this._inactiveSprite;
    }

    set inactiveSprite(value: Phaser.GameObjects.Sprite) {
        this._inactiveSprite = value;
    }

    private _activeSprite: Sprite;

    get activeSprite(): Phaser.GameObjects.Sprite {
        return this._activeSprite;
    }

    set activeSprite(value: Phaser.GameObjects.Sprite) {
        this._activeSprite = value;
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

    get isVisible() {
        return this.activeSprite.visible;
    }
}

export interface IGameTurnUIConfig extends IGameZoneConfig {
    playerID: string;
    turnState?: TurnState;
}

export default class GameTurnUI extends BorderContainer {
    private _phases: Array<GameTurn>;
    private _playerID: string;
    private _turnState: TurnState;
    private _submitImage: Sprite;
    private _actionButton: Button;
    private actionButtonLabel: Label;

    constructor(config: IGameTurnUIConfig) {
        const {scene, x, y, width, height, name, borderColor, playerID, turnState} = config;

        const submitImage = new Sprite(scene, 0, 0, 'blueUI', 'blue_button00.png');
        const activePhase = new GameTurn({
            scene,
            id: TurnPhases.ACTIVE,
            x,
            y,
            name: TurnStates.ACTIVE,
            inactiveTexture: 'greyUI',
            inactiveFrame: 'grey_box.png',
            activeTexture: 'blueUI',
            activeFrame: 'blue_button10.png',

        });
        const drawPhase = new GameTurn({
            scene,
            id: TurnPhases.DRAW,
            x,
            y,
            name: TurnStates.DRAW,
            inactiveTexture: 'greyUI',
            inactiveFrame: 'grey_box.png',
            activeTexture: 'blueUI',
            activeFrame: 'blue_button10.png'

        });
        const mainPhase1 = new GameTurn({
            scene,
            id: TurnPhases.MAIN_1,
            x,
            y,
            name: TurnStates.MAIN_1,
            inactiveTexture: 'greyUI',
            inactiveFrame: 'grey_box.png',
            activeTexture: 'blueUI',
            activeFrame: 'blue_button10.png'
        });
        const attackPhase = new GameTurn({
            scene,
            id: TurnPhases.ATTACK,
            x,
            y,
            name: TurnStates.ATTACK,
            inactiveTexture: 'greyUI',
            inactiveFrame: 'grey_box.png',
            activeTexture: 'blueUI',
            activeFrame: 'blue_button10.png'
        });
        const mainPhase2 = new GameTurn({
            scene,
            id: TurnPhases.MAIN_2,
            x,
            y,
            name: TurnStates.MAIN_2,
            inactiveTexture: 'greyUI',
            inactiveFrame: 'grey_box.png',
            activeTexture: 'blueUI',
            activeFrame: 'blue_button10.png'
        });
        const endPhase = new GameTurn({
            scene,
            id: TurnPhases.END,
            x,
            y,
            name: TurnStates.END,
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
        // this.add(submitImage);

        this._submitImage = submitImage;
        this._turnState = turnState;
        this._playerID = playerID;
        this._phases = phases;
        this.name = name;
        this.width = width;
        this.height = height;

        this.actionButtonLabel = new Label(this.scene, {
            background: this.submitImage,
            text: new Text(this.scene, 0, 0, 'Next', {fontFamily: 'Ken Vector', fontSize: '50pt'})
        });

        this._actionButton = new Button(this.actionButtonLabel, {
            enable: true,
            mode: 'release',
            clickInterval: 100
        });

        // this.add(this.actionButtonLabel);

        this.layoutPhases();
        this.scene.add.existing(this);
    }

    activatePhase(turnPhase: TurnPhases) {
        for (const phaseUI of this.phases) {
            if (phaseUI.id === turnPhase) {
                phaseUI.showIndicator()
            }
        }
    }

    deactivatePhase(turnPhase: TurnPhases) {
        for (const phaseUI of this.phases) {
            if (phaseUI.id === turnPhase) {
                phaseUI.hideIndicator()
            }
        }
    }

    layoutPhases() {
        const turnWidth = this.width / this._phases.length;
        const startingPos = this.width / 2;
        const endingPos = this.width * 2;
        const diff = endingPos - startingPos;
        const spacing = diff / this._phases.length;

        for (let i = 0; i < this._phases.length; i++) {
            const phase = this._phases[i];
            phase.width = turnWidth / 2;
            phase.height = this.height;
            phase.x -= startingPos - phase.width - (phase.width * i);
            phase.y -= this.height / 2;
            phase.activeSprite.y += this.height / 2;
            phase.inactiveSprite.y += this.height / 2;
        }
    }

    get phases(): Array<GameTurn> {
        return this._phases;
    }

    set phases(value: Array<GameTurn>) {
        this._phases = value;
    }

    get playerID(): string {
        return this._playerID;
    }

    set playerID(value: string) {
        this._playerID = value;
    }


    get turnState(): TurnState {
        return this._turnState;
    }

    set turnState(value: TurnState) {
        this._turnState = value;
    }

    get activePhase(): GameTurn {
        return this._phases[0];
    }

    get drawPhase(): GameTurn {
        return this._phases[1];
    }

    get mainPhase1(): GameTurn {
        return this._phases[2];
    }

    get attackPhase(): GameTurn {
        return this._phases[3];
    }

    get mainPhase2(): GameTurn {
        return this._phases[4];
    }

    get endPhase(): GameTurn {
        return this._phases[5];
    }

    get submitImage(): Phaser.GameObjects.Sprite {
        return this._submitImage;
    }

    set submitImage(value: Phaser.GameObjects.Sprite) {
        this._submitImage = value;
    }

    get actionButton(): Button {
        return this._actionButton;
    }

    set actionButton(value: Button) {
        this._actionButton = value;
    }

}
