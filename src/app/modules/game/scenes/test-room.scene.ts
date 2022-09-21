import {Game, Scene} from 'phaser';
import GridButtons from 'phaser3-rex-plugins/templates/ui/gridbuttons/GridButtons';
import Label from 'phaser3-rex-plugins/templates/ui/label/Label';
import TextBox from 'phaser3-rex-plugins/templates/ui/textbox/TextBox';
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';
import FFTCGCard from '../gameobjects/cards/card_fftcg';
import CardFactory from '../gameobjects/cards/fftcg_cards/card_factory';
import {
    DeckChosenMessageInput,
    GameMessages, GamePhases,
    NextPhaseMessageInput,
    SetGamePhaseMessageInput
} from '../server/messages/game_messages';
import GameServer from '../server/server';
import {CorneliaRoomState} from '../server/states/CorneliaRoomState';
import {PlayerState} from '../server/states/PlayerState';
import {StateTextBuilder} from '../utils';
import GameObject = Phaser.GameObjects.GameObject;

export default class TestRoomScene extends Scene {
    private server!: GameServer;
    public deck: FFTCGCard[];
    private rexUI: RexUIPlugin;
    public stateBoxPlayer1: TextBox;
    public player1Menu: Label[] = [];

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


        t


        this.add.text(5, 5, 'Commands').setOrigin(0);

        this.server.room.onStateChange(async (state: CorneliaRoomState) => {
            for (let player of state.players.values()) {
                console.log(player.deckID)
            }
            this.updateStateDisplay(this.stateBoxPlayer1, state);
        });

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
        const currentPlayer: PlayerState = state.players.get(this.server.getCurrentPlayer().sessionID)
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
}
