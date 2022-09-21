import {Scene} from 'phaser';
import Label from 'phaser3-rex-plugins/templates/ui/label/Label';
import TextBox from 'phaser3-rex-plugins/templates/ui/textbox/TextBox';
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin';
import FFTCGCard from '../gameobjects/cards/card_fftcg';
import CardFactory from '../gameobjects/cards/fftcg_cards/card_factory';
import PlayerBoard, {IPlayerConfig} from '../gameobjects/players/player.gameobject';
import {BaseZone} from '../gameobjects/zones/base.zone';
import GameManager from '../managers/game.manager';
import {GameMessages} from '../server/messages/game_messages';
import GameServer from '../server/server';
import Server from '../server/server';
import {PlayerState} from '../server/states/PlayerState';
import DeckService from '../services/deck.service';
import GameButton from '../ui/button';
import {StateTextBuilder} from '../utils';
import ParticleEmitterManager = Phaser.GameObjects.Particles.ParticleEmitterManager;
import Sprite = Phaser.GameObjects.Sprite;
import GAMEOBJECT_POINTER_UP = Phaser.Input.Events.GAMEOBJECT_POINTER_UP;
import CursorKeys = Phaser.Types.Input.Keyboard.CursorKeys;

export default class GameScene extends Scene {
    private background: Sprite;
    private gameManager: GameManager;
    private deckService: DeckService;
    private cursors: CursorKeys;
    private playerBoard: PlayerBoard;
    private opponentBoard: PlayerBoard;
    private particles: ParticleEmitterManager;
    public output: Label;
    private actionButton: GameButton;
    public server!: Server;
    private rexUI: RexUIPlugin;
    public stateBox: TextBox;

    constructor() {
        super('GameScene');

        this.deckService = new DeckService();
    }


    preload() {
        this.load.image('card-back', 'assets/game/cards/card_back.jpg');
        this.load.image('background', 'assets/cornelia_bg.jpg');
        this.load.image('card_border', 'assets/card_border_rpg.png');
        this.load.image('wind_cp', 'assets/icon/wind_cp.png');
        this.load.atlas('flares', 'assets/flares.png', 'assets/flares.json');
        this.load.atlasXML('blueUI', 'assets/uipack/Spritesheet/blueSheet.png', 'assets/uipack/Spritesheet/blueSheet.xml');
        this.load.atlasXML('greyUI', 'assets/uipack/Spritesheet/greySheet.png', 'assets/uipack/Spritesheet/greySheet.xml');
        this.load.atlasXML('redUI', 'assets/uipack/Spritesheet/redSheet.png', 'assets/uipack/Spritesheet/redSheet.xml');

        // this.load.audio('ex-burst', '../../../assets/sounds/ex-burst.mp3');
        // this.load.audio('ex-burst-2', '../../../assets/sounds/ex-burst-2.mp3');
    }

    async create(data: { server: GameServer }) {
        this.server = data.server;
        console.log('Game Scene, Game Phase - ', this.server.room.state.gamePhase);

        // this.socketManager = new SocketManager();
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        this.background = this.add.sprite(this.cameras.main.width / 2, this.cameras.main.height / 2, 'background');
        const scaleX = this.cameras.main.width / this.background.width;
        const scaleY = this.cameras.main.height / this.background.height;
        const scale = Math.max(scaleX, scaleY);
        this.background.setScale(scale).setScrollFactor(0);
        this.background.setAlpha(.3, .3, .3, .3);
        this.background.setSize(screenWidth, screenHeight);
        this.gameManager = new GameManager(this);


        this.particles = this.add.particles('flares');
        this.cursors = this.input.keyboard.createCursorKeys();
        const zoneWidth = screenWidth * .1;
        const zoneHeight = screenHeight * .25;
        const zoneSpacing = zoneHeight / 10;


        const playerBoardConfig: IPlayerConfig = {
            id: 'player_id',
            scene: this,
            zoneHeight,
            zoneWidth,
            zoneSpacing,
            boardWidth: screenWidth,
            boardHeight: screenHeight,
            opponent: false
        }

        const opponentBoardConfig: IPlayerConfig = {
            id: 'player_id',
            scene: this,
            zoneHeight,
            zoneWidth,
            zoneSpacing,
            boardWidth: screenWidth,
            boardHeight: screenHeight,
            opponent: true
        }

        this.playerBoard = new PlayerBoard(playerBoardConfig);
        this.opponentBoard = new PlayerBoard(opponentBoardConfig);

        //
        // this.opponentBoard.damageZone = new DamageZone({
        //     scene: this,
        //     name: 'Damage',
        //     x: screenWidth - zoneWidth / 4,
        //     y: (zoneHeight / 2),
        //     width: zoneHeight,
        //     height: zoneWidth * 2,
        //     borderColor: 0x00ffff,
        //     opponent: true
        // });
        //
        //
        //
        // this.opponentBoard.field = new PlayerFieldZone({
        //     scene: this,
        //     name: 'Field',
        //     x: screenWidth / 2,
        //     // y: 500,
        //     y: this.opponentBoard.hand.y + this.opponentBoard.hand.height + zoneSpacing + (zoneHeight / 4),
        //     width: screenWidth * 0.7,
        //     height: zoneHeight * 1.2,
        //     borderColor: 0xA020F0,
        //     opponent: true
        // });
        //
        //
        //
        // this.opponentBoard.turnUI = new GameTurnUI({
        //     playerID: this.opponentBoard.id,
        //     scene: this,
        //     x: this.playerBoard.hand.getBounds().left + zoneWidth * 3,
        //     y: (this.opponentBoard.hand.height / 2) + (zoneHeight / 8),
        //     width: zoneWidth * 3,
        //     height: zoneHeight / 4,
        //     opponent: false,
        //     borderColor: 0xff0000,
        //     name: 'Opponent Game Turn UI'
        // });

        this.actionButton = new GameButton(this, this.playerBoard.breakZone.x, this.playerBoard.turnPhaseUI.y - 10, 'Next', {
            textureDown: 'redUI',
            frameDown: 'red_button00.png',
            textureUp: 'blueUI',
            frameUp: 'blue_button05.png',
            textureOver: 'greyUI',
            frameOver: 'grey_button05.png'
        });

        this.stateBox = this.rexUI.add.textBox({
            x: 0,
            y: 300,
            background: this.rexUI.add.roundRectangle(0, 0, 0, 0, 1).setStrokeStyle(2, 0xFFFFFF),
            text: this.rexUI.add.BBCodeText(0, 0, '', {
                fontSize: '20px',
                wrap: {
                    mode: 'word',
                },
                maxLines: 15
            })
        }).setOrigin(0, 0).layout();

        this.actionButton.on(GAMEOBJECT_POINTER_UP, () => {
            this.server.room.send(GameMessages.NextPhase);
        });

        this.input.keyboard.on('keyup-S', () => {
            this.showState();
            this.refreshState();
        });

        this.server.room.state.turn.listen('turnPhase', (currentValue, previousValue) => {
            console.log('Phase Changed: ', currentValue, previousValue);
            if (this.server.isPlayersTurn) {
                this.playerBoard.turnPhaseUI.activatePhase(currentValue);
                this.playerBoard.turnPhaseUI.deactivatePhase(previousValue);
            } else {
                this.opponentBoard.turnPhaseUI.activatePhase(currentValue);
                this.opponentBoard.turnPhaseUI.deactivatePhase(previousValue);
            }
        });

        this.server.room.onMessage(GameMessages.DrawCard, (params) => {
            if (this.server.getCurrentPlayer().sessionID === params.player) {
                const cardToMove = this.playerBoard.deckZone.cards.find((card: FFTCGCard) => {
                    return card.gameCardID === params.card;
                });

                if (cardToMove) {
                    console.log("card to hand", cardToMove)
                    this.gameManager.moveCard(
                        cardToMove,
                        this.playerBoard.deckZone,
                        this.playerBoard.handZone
                    );
                }

            } else {
                // TODO Build opponents deck
                // const cardToMove = this.opponentBoard.deck.cards.find((card: FFTCGCard) => {
                //     return card.gameCardID === params.cardID;
                // });
                //
                // this.gameManager.moveCard(
                //     cardToMove,
                //     this.opponentBoard.deck,
                //     this.opponentBoard.hand
                // );
            }
        });

        this.showState();

        const p1Cards = this.createDeck(this.server.getCurrentPlayer());
        const p2Cards = this.createDeck(this.server.getOpposingPlayer());

        this.playerBoard.deckZone.addCards(p1Cards, 'top');
        this.opponentBoard.deckZone.addCards(p2Cards, 'top');
    }

    createDeck(player: PlayerState): FFTCGCard[] {
        console.log('create deck')
        const cards: FFTCGCard[] = [];

        console.log('Deck Length: ', player.deckZone.cards.length)

        for (const cardState of player.deckZone.cards) {
            console.log('create: ', cardState.serialNumber)
            const newCard = CardFactory.getCard(this, cardState.serialNumber, cardState);
            if (newCard) {
                console.log(newCard)
                newCard.gameCardID = cardState.gameCardID;
                newCard.setData('currentZone', 'Deck');
                cards.push(newCard);
            } else {
                console.log('card not found')
            }
        }

        return cards;
    }

    getZone(zone: string): BaseZone {
        const zones: { [index: string]: BaseZone } = {
            Backup: this.playerBoard.fieldZone.backupZone,
            Hand: this.playerBoard.handZone,
            Forward: this.playerBoard.fieldZone.forwardZone,
            Damage: this.playerBoard.damageZone,
            Deck: this.playerBoard.deckZone,
            Break: this.playerBoard.breakZone,
            RFG: this.playerBoard.removedFromGameZone,
            Opponent_Backup: this.opponentBoard.fieldZone.backupZone,
            Opponent_Hand: this.opponentBoard.handZone,
            Opponent_Forward: this.opponentBoard.fieldZone.forwardZone,
            Opponent_Damage: this.opponentBoard.damageZone,
            Opponent_Deck: this.opponentBoard.deckZone,
            Opponent_Break: this.opponentBoard.breakZone,
            Opponent_RFG: this.opponentBoard.removedFromGameZone
        };

        return zones[zone];
    }

    showState() {
        if (this.stateBox.visible) {
            this.stateBox.setVisible(false);
        } else {
            this.stateBox.setVisible(true);
        }
    }

    refreshState() {
        const currentPlayer = this.server.getCurrentPlayer();

        const stb = new StateTextBuilder();
        stb.addNewLine(`Game Phase: [color=yellow]${this.server.room.state.gamePhase?.toString()}[/color]`)
            .addNewLine(`Client: [color=yellow]${this.server.getCurrentPlayer().sessionID}[/color]`)
            .addNewLine(`# of Players: [color=yellow]${this.server.room.state.players.size}[/color]`)
            .addNewLine(`Current Phase: [color=yellow]${this.server.room.state.turn?.turnPhase}[/color]`)
            .addNewLine(`Player Turn: [color=yellow]${this.server.room.state.playerTurn}[/color]`)
            .addNewLine(`Player Going First: [color=yellow]${this.server.room.state.playerGoingFirst}[/color]`)
            .addNewLine(`Dice Roll: [color=yellow]${currentPlayer.diceRoll}[/color]`)
            .addNewLine(`Dice Have Been Rolled: [color=yellow]${this.server.room.state.dicedRolled}[/color]`)
            .addNewLine(`Deck Chosen: [color=yellow]${currentPlayer.deckID}[/color]`)
            .addNewLine(`Cards in Deck: [color=yellow]${currentPlayer.deckZone.cards.length}[/color]`)
            .addNewLine(`Cards in Hand: [color=yellow]${currentPlayer.handZone.cards.length}[/color]`);
        this.stateBox.setText(stb.text);
        this.stateBox.layout();
    }
}
