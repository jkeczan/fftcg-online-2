import Label from 'phaser3-rex-plugins/templates/ui/label/Label';
import UIPlugins from 'phaser3-rex-plugins/templates/ui/ui-plugin';
import FFTCGCard from '../gameobjects/cards/card_fftcg';
import CardFactory from '../gameobjects/cards/fftcg_cards/card_factory';
import PlayerBoard, {IPlayerConfig} from '../gameobjects/players/player.gameobject';
import {BaseZone, GameZoneEvents} from '../gameobjects/zones/base.zone';
import GameManager from '../managers/game.manager';
import {GameMessages, TurnPhases} from '../server/messages/game_messages';
import GameServer from '../server/server';
import {CardState} from '../server/states/CardState';
import {GameTurn} from '../server/states/GameTurn';
import {PlayerState} from '../server/states/PlayerState';
import GameButton from '../ui/button';
import {BaseScene} from './base.scene';
import ParticleEmitterManager = Phaser.GameObjects.Particles.ParticleEmitterManager;
import Sprite = Phaser.GameObjects.Sprite;
import Text = Phaser.GameObjects.Text;
import GAMEOBJECT_POINTER_UP = Phaser.Input.Events.GAMEOBJECT_POINTER_UP;
import CursorKeys = Phaser.Types.Input.Keyboard.CursorKeys;
import Sizer = UIPlugins.Sizer;
import Toast = UIPlugins.Toast;

export default class GameScene extends BaseScene {
    private background: Sprite;
    private gameManager: GameManager;
    private cursors: CursorKeys;
    public playerBoard: PlayerBoard;
    private opponentBoard: PlayerBoard;
    private particles: ParticleEmitterManager;
    public output: Label;
    private actionButton: GameButton;
    private toast: Toast;
    private actionLabel: Text;
    private actionUI: Sizer;

    constructor(id: string = 'GameScene') {
        super('GameScene');
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
    }

    async create(data: { server: GameServer }) {
        super.create(data);

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

        this.toast = this.rexUI.add.toast({
            x: screenWidth / 2,
            y: screenHeight / 2,
            orientation: 'h',
            align: 'center',
            transitIn: 'popUp',
            text: this.add.text(0, 0, '', {fontFamily: 'Ken Vector', fontSize: '40pt'})
        });

        this.toast.setDepth(1000);

        const playerBoardConfig: IPlayerConfig = {
            id: this.server.getCurrentPlayer().sessionID,
            scene: this,
            zoneHeight,
            zoneWidth,
            zoneSpacing,
            boardWidth: screenWidth,
            boardHeight: screenHeight,
            opponent: false
        };

        const opponentBoardConfig: IPlayerConfig = {
            id: this.server.getOpposingPlayer().sessionID,
            scene: this,
            zoneHeight,
            zoneWidth,
            zoneSpacing,
            boardWidth: screenWidth,
            boardHeight: screenHeight,
            opponent: true
        };

        this.playerBoard = new PlayerBoard(playerBoardConfig);
        this.opponentBoard = new PlayerBoard(opponentBoardConfig);

        this.actionUI = this.rexUI.add.sizer({
            x: this.playerBoard.breakZone.x,
            y: this.playerBoard.breakZone.getBounds().top - (zoneHeight / 4),
            width: 500,
            orientation: 'v',
            space: {
                left: 5, right: 5, top: 5, bottom: 5, item: 5
            }
        });

        // this.actionUI.add(this.rexUI.add.label({
        //     x: 0,
        //     y: 0,
        //     align: 'center',
        //     text: this.add.text(0, 0, 'My Turn', {fontFamily: 'Ken Vector', fontSize: '15pt'})
        // }));

        this.actionButton = new GameButton(this, 0, 0, 'Next', {
            textureDown: 'redUI',
            frameDown: 'red_button00.png',
            textureUp: 'blueUI',
            frameUp: 'blue_button05.png',
            textureOver: 'greyUI',
            frameOver: 'grey_button05.png'
        }).on(GAMEOBJECT_POINTER_UP, () => {
            this.executeActionButtonCommand();
        });

        this.actionUI.add(this.actionButton);
        this.actionUI.layout();


        this.server.room.state.listen('turn', (currentValue, previousValue) => {
            this.executeTurnChange(currentValue, previousValue);
        });

        this.server.room.state.turn.listen('turnPhase', (currentValue, previousValue) => {
            this.executeTurnPhaseChange(currentValue, previousValue);
        });

        this.server.room.state.turn.listen('playerWithPriority', (currentValue, previousValue) => {
            this.updateActionButton();
        });

        this.server.room.onMessage(GameMessages.DrawCard, (params) => {
            this.executeDrawCardCommand(params);
        });

        this.playerBoard.stagingAreaZone.on(GameZoneEvents.UNSTAGE_CARDS, (card: FFTCGCard) => {
            this.gameManager.moveCard(card, this.playerBoard.stagingAreaZone, this.playerBoard.handZone);
        });

        this.events.on(GameZoneEvents.STAGE_CARDS, (card) => {
            this.gameManager.moveCard(card, this.playerBoard.handZone, this.playerBoard.stagingAreaZone);
        });

        const p1Cards = await this.createDeck(this.server.getCurrentPlayer());
        const p2Cards = await this.createDeck(this.server.getOpposingPlayer());

        this.playerBoard.deckZone.addCards(p1Cards, 'top');
        this.opponentBoard.deckZone.addCards(p2Cards, 'top');

        this.input.keyboard.on('keyup-S', () => {
            this.playerBoard.deckZone.shuffle();
        });
    }

    async createDeck(player: PlayerState): Promise<FFTCGCard[]> {
        console.log('Deck Length: ', player.deckZone.cards.length);

        const cards = Promise.all(player.deckZone.cards.map(async (cardState: CardState) => {
            const newCard = await CardFactory.getCard(this, cardState.serialNumber, cardState);
            if (newCard) {
                newCard.gameCardID = cardState.gameCardID;
                newCard.setData('currentZone', 'Deck');
                return newCard;
            } else {
                console.log('card not found');
            }
        }));


        return cards;
    }

    /**
     * This method is responsible for updating the action button based on the current state
     */
    updateActionButton() {
        // TODO convert to state machine; use RexUI FSM

        if (this.server.isPlayersTurn && this.server.playerHasPriority()) {
            (this.actionUI.childrenMap.items[0] as GameButton).enable();
            this.actionButton.setText('Next');
        } else if (this.server.isPlayersTurn && !this.server.playerHasPriority()) {
            (this.actionUI.childrenMap.items[0] as GameButton).disable();
            this.actionButton.setText('Waiting...');
        } else if (!this.server.isPlayersTurn && this.server.playerHasPriority()) {
            (this.actionUI.childrenMap.items[0] as GameButton).enable();
            this.actionButton.setText('Pass');
        } else if (!this.server.isPlayersTurn && !this.server.playerHasPriority()) {
            (this.actionUI.childrenMap.items[0] as GameButton).disable();
            this.actionButton.setText(`Opponents Turn`);
        }
    }

    executeActionButtonCommand() {
        if (this.server.isPlayersTurn && this.server.playerHasPriority()) {
            this.server.room.send(GameMessages.NextPhase);
        } else if (this.server.isPlayersTurn && !this.server.playerHasPriority()) {
            console.log('No Priority to do anything');
        } else if (!this.server.isPlayersTurn && this.server.playerHasPriority()) {
            this.server.room.send(GameMessages.PassPriority);
        } else if (!this.server.isPlayersTurn && !this.server.playerHasPriority()) {
            console.log('No Priority to do anything');
        }
    }

    executeTurnChange(currentTurn: GameTurn, previousTurn: GameTurn) {
        if (currentTurn.player !== previousTurn.player) {
            if (this.server.getCurrentPlayer().sessionID === currentTurn.player.sessionID) {
                this.toast.showMessage('Your Turn');
                (this.actionUI.childrenMap.items[0] as GameButton).setText('My Turn');
                (this.actionUI.childrenMap.items[0] as GameButton).enable();

            } else {
                this.toast.showMessage(`Opponents Turn`);
                (this.actionUI.childrenMap.items[0] as GameButton).setText(`Opponents Turn`);
                (this.actionUI.childrenMap.items[0] as GameButton).disable();
            }
        }
    }

    executeDrawCardCommand(params) {
        if (this.server.getCurrentPlayer().sessionID === params.player) {
            const cardToMove = this.playerBoard.deckZone.cards.find((card: FFTCGCard) => {
                return card.gameCardID === params.card;
            });

            if (cardToMove) {
                this.gameManager.moveCard(
                    cardToMove,
                    this.playerBoard.deckZone,
                    this.playerBoard.handZone
                );
            }

        } else {
            const cardToMove = this.opponentBoard.deckZone.cards.find((card: FFTCGCard) => {
                return card.gameCardID === params.card;
            });

            if (cardToMove) {
                this.gameManager.moveCard(
                    cardToMove,
                    this.opponentBoard.deckZone,
                    this.opponentBoard.handZone
                );
            }
        }
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

    private executeTurnPhaseChange(currentPhase: TurnPhases, previousPhase: TurnPhases) {
        if (this.server.isPlayersTurn) {
            this.playerBoard.turnPhaseUI.activatePhase(currentPhase);
            this.playerBoard.turnPhaseUI.deactivatePhase(previousPhase);
            if (currentPhase === TurnPhases.END_TURN) {
                this.actionButton.setText('End Turn');
            } else {
                this.actionButton.setText('Next');
            }
        } else {
            this.opponentBoard.turnPhaseUI.activatePhase(currentPhase);
            this.opponentBoard.turnPhaseUI.deactivatePhase(previousPhase);
            this.actionButton.setText('Opponents Turn');
        }
    }
}
