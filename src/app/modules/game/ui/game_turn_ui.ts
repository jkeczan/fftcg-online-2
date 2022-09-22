import GlowFilterPipelinePlugin from 'phaser3-rex-plugins/plugins/glowfilterpipeline-plugin';
import OutlinePipelinePlugin from 'phaser3-rex-plugins/plugins/outlinepipeline-plugin';
import GlowFilterPostFxPipeline from 'phaser3-rex-plugins/plugins/shaders/glowfilter/GlowFilterPostFxPipeline';
import Label from 'phaser3-rex-plugins/templates/ui/label/Label';
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';
import BorderContainer from '../gameobjects/border_container';
import {IGameZoneConfig} from '../gameobjects/zones/base.zone';
import {TurnPhases} from '../server/messages/game_messages';
import {TurnState} from '../states/turn.state';
import Sprite = Phaser.GameObjects.Sprite;

export interface IGameTurnUIConfig extends IGameZoneConfig {
    playerID: string;
    turnState?: TurnState;
    rexUI: RexUIPlugin;
}

export default class GameTurnUI extends BorderContainer {
    private phases: Array<Label>;
    private turnState: TurnState;
    public rexUI: RexUIPlugin;


    public mapping = {
        1: 'Active',
        2: 'Draw',
        3: 'Main 1',
        4: 'Attack',
        5: 'Main 2',
        6: 'End'
    }

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

        let sizer = this.rexUI.add.gridSizer({
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
            const phaseButton = this.createGridButton(this.mapping[code])
            sizer.add(phaseButton);
            return phaseButton;
        })

        sizer.layout();

        sizer.setChildrenInteractive({})
        sizer.on('child.click', (child: Label) => {
            if (child.state === 1) {
                (child.childrenMap.background as Sprite).setTexture('blueUI', 'blue_button05.png')
                child.setState(0);
            } else {
                (child.childrenMap.background as Sprite).setTexture('redUI', 'red_button00.png');

                child.setState(1);
            }
        })

        this.turnState = turnState;
        this.name = name;
        this.width = width;
        this.height = height;

        this.scene.add.existing(this);
    }

    createGridButton(phaseName: string) {
        const button = this.scene.add.sprite(0,0, 'blueUI', 'blue_button05.png');
        const text = this.rexUI.add.BBCodeText(100, 30, `[color=white]${phaseName}[/color]`, {
            fontSize: '30px',
            align: 'center'
        });

        const label = this.rexUI.add.label({
            name: phaseName,
            width: 40,
            height: 40,
            background: button,
            text: text,
            space: {
                left: 10,
                right: 10,
            },
            align: 'center'
        });

        label.setTexture('blueUI', 'blue_button05.png');

        return label;
    }

    activatePhase(turnPhase: TurnPhases) {

    }

    deactivatePhase(turnPhase: TurnPhases) {

    }
}
