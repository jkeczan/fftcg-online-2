import {getLocaleCurrencyName} from '@angular/common';
import {Scene} from 'phaser';
import Label from 'phaser3-rex-plugins/templates/ui/label/Label';
import TextBox from 'phaser3-rex-plugins/templates/ui/textbox/TextBox';
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';
import FFTCGCard from '../gameobjects/cards/card_fftcg';
import CardFactory from '../gameobjects/cards/fftcg_cards/card_factory';
import {
    DeckChosenMessageInput,
    GameMessages,
    GamePhases,
    NextPhaseMessageInput, PriorityMessageInput,
    SetGamePhaseMessageInput,
    TurnPhases
} from '../server/messages/game_messages';
import GameServer from '../server/server';
import {CorneliaRoomState} from '../server/states/CorneliaRoomState';
import {PlayerState} from '../server/states/PlayerState';
import {RequestedPriority} from '../server/states/RequestedPriority';
import GameTurnUI, {TurnPriorityEvent, TurnUIEvent} from '../ui/game_turn_ui';
import {StateTextBuilder} from '../utils';
import GameScene from './game.scene';

const fragmentShader7 = `
#ifdef GL_ES
precision mediump float;
#endif

// Love u Hanna E

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float snoise(vec3 uv, float res) {
    const vec3 s = vec3(1e0, 1e2, 1e3);

    uv *= res;

    vec3 uv0 = floor(mod(uv, res)) * s;
    vec3 uv1 = floor(mod(uv + vec3(1.0), res)) * s;

    vec3 f = smoothstep(0.0, 1.0, fract(uv));

    vec4 v = vec4(uv0.x + uv0.y + uv0.z,
              uv1.x + uv0.y + uv0.z,
              uv0.x + uv1.y + uv0.z,
              uv1.x + uv1.y + uv0.z);

    vec4 r = fract(sin(v * 1e-1) * 1e3);
    float r0 = mix(mix(r.x, r.y, f.x), mix(r.z, r.w, f.x), f.y);

    r = fract(sin((v + uv1.z - uv0.z) * 1e-1) * 1e3);
    float r1 = mix(mix(r.x, r.y, f.x), mix(r.z, r.w, f.x), f.y);

    return mix(r0, r1, f.z) * 2.0 - 1.0;
}

void main() {
    vec2 p = -0.5 + gl_FragCoord.xy / resolution.xy;
    p.x *= resolution.x / resolution.y;
    float lp = .02/length(p);
    float ap = atan(p.x, p.y);

    float time = time*.04-pow(time, .8)*(1. + .1*cos(time*0.04))*2.;

    float r1 = 0.2;
    if(lp <= r1){
        ap -= time*0.1+lp*9.;
        lp = sqrt(1.-lp/r1)*0.5;
    }else{
        ap += time*0.1+lp*2.;
        lp -= r1;
    }

    lp = pow(lp*lp, 1./3.);

    p = lp*vec2(sin(ap), cos(ap));

    float color = 5.0 - (6.0 * lp);

    vec3 coord = vec3(atan(p.x, p.y) / 6.2832 + 0.5, 0.4 * lp, 0.5);

    float power = 2.0;
    for (int i = 0; i < 6; i++) {
        power *= 2.0;
        color += (1.5 / power) * snoise(coord + vec3(0.0, -0.05 * time*2.0, 0.01 * time*2.0), 16.0 * power);
    }
    color = max(color, 0.0);
    float c2 = color * color;
    float c3 = color * c2;
    vec3 fc = vec3(color * 0.34, c2*0.15, c3*0.85);
    float f = fract(time);
    //fc *= smoothstep(f-0.1, f, length(p)) - smoothstep(f, f+0.1, length(p));
    gl_FragColor = vec4(length(fc)*vec3(1,02,0)*0.04, 1.0);
}
`;

export default class TestRoomScene extends Scene {
    private server!: GameServer;
    public deck: FFTCGCard[];
    private rexUI: RexUIPlugin;
    public stateBoxPlayer1: TextBox;
    public player1Menu: Label[] = [];

    public turnUI: GameTurnUI;

    public card: FFTCGCard;

    constructor() {
        super('TestRoomScene');
    }

    preload() {
        console.log('Preloading Choose Deck Scene');

        this.load.image('card-back', 'assets/game/cards/card_back.jpg');
        this.load.image('background', 'assets/cornelia_bg.jpg');
        this.load.image('card_border', 'assets/card_border_rpg.png');
        this.load.image('wind_cp', 'assets/icon/wind_cp.png');
        this.load.atlas('flares', 'assets/flares.png', 'assets/flares.json');
        this.load.atlasXML('blueUI', 'assets/uipack/Spritesheet/blueSheet.png', 'assets/uipack/Spritesheet/blueSheet.xml');
        this.load.atlasXML('greyUI', 'assets/uipack/Spritesheet/greySheet.png', 'assets/uipack/Spritesheet/greySheet.xml');
        this.load.atlasXML('redUI', 'assets/uipack/Spritesheet/redSheet.png', 'assets/uipack/Spritesheet/redSheet.xml');

        this.load.glsl('gray_cloud', 'assets/shaders/gray_cloud.frag');
    }

    async create(data: { server: GameServer, server2: GameServer }) {
        console.log('Creating Choose Deck Scene');
        this.server = data.server;

        const {width, height} = this.scale;

        this.add.shader('gray_cloud', width / 2, height / 2, width, height);

        this.stateBoxPlayer1 = this.rexUI.add.textBox({
            x: 350,
            y: 20,
            background: this.rexUI.add.roundRectangle(0, 0, 0, 0, 1).setStrokeStyle(2, 0xFFFFFF),
            text: this.rexUI.add.BBCodeText(0, 0, '', {
                fontSize: '20px',
                wrap: {
                    mode: 'word',
                },
                maxLines: 15
            })
        }).setOrigin(0, 0).layout();
        const zoneWidth = innerWidth * .1;
        const zoneHeight = innerHeight * .25;
        const zoneSpacing = zoneHeight / 10;

        this.turnUI = new GameTurnUI({
            playerID: 'test',
            scene: ((this as any) as GameScene),
            x: innerWidth / 2,
            y: 300,
            width: innerWidth * .7,
            height: zoneHeight / 4,
            opponent: false,
            borderColor: 0xff0000,
            name: 'Player Game Turn UI',
            rexUI: this.rexUI
        }).on(TurnUIEvent.RequestPriority, (params: TurnPriorityEvent) => {
            console.log('Priority Requested', params);
            const requestMessageParams: PriorityMessageInput = {
                forTurnPhase: params.turnPhase
            };
            this.server.room.send(GameMessages.RequestPriority, requestMessageParams);
        }).on(TurnUIEvent.ReleasingPriority, (params: TurnPriorityEvent) => {
            console.log('Priority Released', params);
            const releaseMessageParams: PriorityMessageInput = {
                forTurnPhase: params.turnPhase
            };
            this.server.room.send(GameMessages.ReleasingPriority, releaseMessageParams);
        });


        this.add.text(5, 5, 'Commands').setOrigin(0);

        this.server.room.onStateChange(async (state: CorneliaRoomState) => {
            for (let player of state.players.values()) {
                console.log(player.deckID);
            }
            this.updateStateDisplay(this.stateBoxPlayer1, state);
        });

        this.server.state.listen('priorities', (currentValue: RequestedPriority[], previousValue: RequestedPriority[]) => {

        });

        this.server.state.turn.listen('turnPhase', (currentValue: TurnPhases, previousValue: TurnPhases) => {
            this.turnUI.activatePhase(currentValue);
            this.turnUI.deactivatePhase(previousValue);
        })

        this.addPlayer1TestButtons();
        this.card = await CardFactory.getCard(this, '15-140S');
        this.card.x = width / 2;
        this.card.y = height / 2;
    }

    addPlayer1TestButtons() {
        this.player1Menu.push(this.createButton('Select Turks', () => {
            this.selectDeck('turks');
        }));

        this.player1Menu.push(this.createButton('Select Avalanche', () => {
            this.selectDeck('avalanche');
        }));

        this.player1Menu.push(this.createButton('Next Turn Phase', () => {
            this.nextPhase();
        }));

        this.player1Menu.push(this.createButton('Request New Turn', () => {
            this.requestNewTurn();
        }));

        this.player1Menu.push(this.createButton('Confirm Hand', () => {
            this.confirmHand();
        }));

        this.player1Menu.push(this.createButton('Force Game in Progress', () => {
            this.setGameState();
        }));

        this.player1Menu.push(this.createButton('Flip Card Forward', () => {
            this.turnForward();
        }));

        this.player1Menu.push(this.createButton('Flip Card Backward', () => {
            this.turnBackward();
        }));

        this.player1Menu.push(this.createButton('Toggle Particle Effect', () => {
            this.toggleParticalEffect();
        }));

        this.player1Menu.push(this.createButton('Activate Main 1', () => {
            this.activatePhase(TurnPhases.MAIN_1);
        }));

        this.player1Menu.push(this.createButton('Activate Attack Phase', () => {
            this.activatePhase(TurnPhases.ATTACK);
        }));

        let counter = 1;
        for (let button of this.player1Menu) {
            button.x = 5;
            button.y = 40 * counter;
            counter++;
        }
    }

    createButton(text: string, callback: () => void): Label {
        const testButton = this.rexUI.add.label({
            // width: 200,
            // height: 200,
            background: this.rexUI.add.roundRectangle(0, 0, 0, 0, 1).setStrokeStyle(2, 0xFFFFFF),
            text: this.add.text(0, 0, text, {
                fontSize: '16pt'
            }),
            space: {left: 5, right: 5, top: 5, bottom: 5},
            align: 'center',
        });


        testButton.setOrigin(0);
        testButton.layout();
        this.input.enable(testButton);

        testButton.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
            console.log('Callback');
            callback();
        });

        return testButton;
    }

    updateStateDisplay(stateBox: TextBox, state?: CorneliaRoomState) {
        const currentPlayer: PlayerState = state.players.get(this.server.getCurrentPlayer().sessionID);
        if (!state) {
            state = this.server.room.state;
        }
        const stb = new StateTextBuilder();

        stb.addNewLine(`Game Phase: [color=yellow]${state.gamePhase?.toString()}[/color]`)
            .addNewLine(`Client: [color=yellow]${this.server.getCurrentPlayer().sessionID}[/color]`)
            .addNewLine(`# of Players: [color=yellow]${state.players.size}[/color]`)
            .addNewLine(`Current Phase: [color=yellow]${state.turn?.turnPhase}[/color]`)
            .addNewLine(`Player Turn: [color=yellow]${state.playerTurn}[/color]`)
            .addNewLine(`Player Going First: [color=yellow]${state.playerGoingFirst}[/color]`)
            .addNewLine(`Dice Roll: [color=yellow]${currentPlayer.diceRoll}[/color]`)
            .addNewLine(`Dice Have Been Rolled: [color=yellow]${state.dicedRolled}[/color]`)
            .addNewLine(`Deck Chosen: [color=yellow]${currentPlayer.deckID}[/color]`)
            .addNewLine(`Cards in Deck: [color=yellow]${currentPlayer.deckZone.cards.length}[/color]`)
            .addNewLine(`Cards in Hand: [color=yellow]${currentPlayer.handZone.cards.length}[/color]`)
            .addNewLine(`Priority Windows: [color=yellow]${state.priorities.length}[/color]`);
        stateBox.setText(stb.text);
        stateBox.layout();
    }


    setGameState() {
        const setGameStateParams: SetGamePhaseMessageInput = {
            gamePhase: GamePhases.GAME_IN_PROGRESS
        };
        this.server.room.send(GameMessages.SetGamePhase, setGameStateParams);
    }

    nextPhase() {
        const nextTurnParams: NextPhaseMessageInput = {};
        this.server.room.send(GameMessages.NextPhase, nextTurnParams);
    }

    selectDeck(deckID: string) {
        const selectDeckParams: DeckChosenMessageInput = {
            deckID
        };
        this.server.room.send(GameMessages.DeckChosen, selectDeckParams);
    }

    requestNewTurn() {
        this.server.room.send(GameMessages.RequestNewTurn);
    }

    confirmHand() {
        this.server.room.send(GameMessages.PlayerConfirmsHand);
    }

    turnForward() {
        this.card.flipForward();
    }

    turnBackward() {
        this.card.flipBack();
    }

    toggleParticalEffect() {
        if (this.card.particleEmitterManager) {
            this.card.stopZoneParticleEffect();
        } else {
            this.card.highlightZoneParticleEffect();
        }
    }

    activatePhase(turnPhase: TurnPhases) {
        this.turnUI.activatePhase(turnPhase);
    }
}
