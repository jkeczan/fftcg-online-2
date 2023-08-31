import Label from 'phaser3-rex-plugins/templates/ui/label/Label';
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';
import BorderContainer, {IBorderContainerConfig} from '../gameobjects/border_container';
import {TurnPhases} from '../server/messages/game_messages';
import {TurnState} from '../states/turn.state';
import Sprite = Phaser.GameObjects.Sprite;

export interface IGameTurnUIConfig extends IBorderContainerConfig {
    playerID: string;
    turnState?: TurnState;
    rexUI: RexUIPlugin;
}

export interface TurnPriorityEvent {
    turnPhase: TurnPhases;
}

export enum TurnUIEvent {
    RequestPriority = 'requestPriority',
    ReleasingPriority = 'releasingPriority'
}

export default class GameTurnUI extends BorderContainer {
    private phases: Array<Label>;
    private turnState: TurnState;
    public rexUI: RexUIPlugin;

    public mapping: { [key: number]: string } = {
        1: 'Active',
        2: 'Draw',
        3: 'Main 1',
        4: 'Attack',
        5: 'Main 2',
        6: 'End'
    };

    private turnPhaseCodes: TurnPhases[] = [
        TurnPhases.ACTIVE,
        TurnPhases.DRAW,
        TurnPhases.MAIN_1,
        TurnPhases.ATTACK,
        TurnPhases.MAIN_2,
        TurnPhases.END
    ];


    constructor(config: IGameTurnUIConfig) {
        const {scene, x, y, width, height, name, borderColor, playerID, turnState} = config;

        super({
            scene,
            x,
            y,
            width,
            height,
            borderColor: 0xff0000
        });

        this.rexUI = config.rexUI;

        const sizer = this.rexUI.add.gridSizer({
            x: this.x, y: this.y,
            width: config.width, height: config.height,
            column: 6, row: 1,
            columnProportions: 1, rowProportions: 1,

            space: {
                top: 20, bottom: 20, left: 10, right: 10,
                // column: 6, row: 1
            }
        }).setOrigin(0.5, 0.5);


        this.phases = this.turnPhaseCodes.map((code: TurnPhases) => {
            const phaseButton = this.createGridButton(this.mapping[code]);
            phaseButton.setData('code', code);
            sizer.add(phaseButton);
            return phaseButton;
        });

        sizer.layout();

        sizer.setChildrenInteractive({});
        sizer.on('child.click', (child: Label) => {
            if (child.state === 1) {
                (child.childrenMap.background as Sprite).setTexture('blueUI', 'blue_button05.png');
                child.setState(0);
                this.emit(TurnUIEvent.ReleasingPriority, {turnPhase: child.getData('code')});
            } else {
                (child.childrenMap.background as Sprite).setTexture('redUI', 'red_button00.png');
                (child.childrenMap.background as Sprite).setAlpha(1);
                child.setState(1);
                this.emit(TurnUIEvent.RequestPriority, {turnPhase: child.getData('code')});
            }
        });


        this.turnState = turnState;
        this.name = name;
        this.width = width;
        this.height = height;

        this.scene.add.existing(this);
    }

    createGridButton(phaseName: string) {
        const button = this.scene.add.sprite(0, 0, 'blueUI', 'blue_button05.png').setAlpha(.5);
        const text = this.rexUI.add.BBCodeText(100, 30, `[color=white]${phaseName}[/color]`, {
            fontSize: '30px',
            align: 'center'
        });

        const label = this.rexUI.add.label({
            name: phaseName,
            width: 40,
            height: 40,
            background: button,
            text,
            space: {
                left: 10,
                right: 10,
            },
            align: 'center'
        });

        return label;
    }

    activatePhase(turnPhase: TurnPhases) {
        this.phases.forEach((phase: Label) => {
            if (phase.getData('code') === turnPhase) {
                (phase.childrenMap.background as Sprite).setAlpha(1);
                (phase.childrenMap.background as Sprite).setTexture('blueUI', 'blue_button05.png');
            } else {
                (phase.childrenMap.background as Sprite).setAlpha(.5);
            }
        });
    }

    deactivatePhase(turnPhase: TurnPhases) {
        this.phases.forEach((phase: Label) => {
            if (phase.getData('code') === turnPhase) {
                (phase.childrenMap.background as Sprite).setAlpha(.5);
            }
        });
    }
}
