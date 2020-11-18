import {Scene} from 'phaser';
import CardDraggable from '../gameobjects/CardDraggable';
import PlayerHand from '../gameobjects/PlayerHand';
import PlayerDeck from '../gameobjects/PlayerDeck';
import PlayerBackupField from '../gameobjects/PlayerBackupField';
import PlayerDamageZone from '../gameobjects/PlayerDamageZone';
import PlayerBreakZone from '../gameobjects/PlayerBreakZone';
import {GameZone} from '../gameobjects/GameZone';
import DRAG_END = Phaser.Input.Events.DRAG_END;
import DROP = Phaser.Input.Events.DROP;
import DRAG = Phaser.Input.Events.DRAG;


export default class GameScene extends Scene {
    private playerHand: PlayerHand;
    private playerDeck: PlayerDeck;
    private playerBackupZone: PlayerBackupField;
    private playerDamageZone: PlayerDamageZone;
    private playerBreakZone: PlayerBreakZone;

    constructor() {
        super('MainScene');
    }

    preload() {
        this.load.image('card0', '../../../assets/game/cards/12-004R.jpg');
        this.load.image('card1', '../../../assets/game/cards/12-025H.jpg');
        this.load.image('card2', '../../../assets/game/cards/12-039C.jpg');
        this.load.image('card3', '../../../assets/game/cards/12-074H.jpg');
        this.load.image('card4', '../../../assets/game/cards/12-095R.jpg');
        this.load.image('card5', '../../../assets/game/cards/12-109L.jpg');
        this.load.image('card6', '../../../assets/game/cards/12-110L.jpg');
        this.load.image('card7', '../../../assets/game/cards/12-113C.jpg');
        this.load.image('card8', '../../../assets/game/cards/12-116L.jpg');
        this.load.image('card9', '../../../assets/game/cards/12-119L.jpg');
        this.load.image('card-back', '../../../assets/game/cards/card_back.jpg');
    }

    create() {
        const screenWidth = window.innerWidth;
        this.playerHand = new PlayerHand({
            scene: this,
            name: 'Hand',
            x: screenWidth / 2 - 150,
            y: window.screen.height - 300,
            width: screenWidth * .7,
            height: 150
        });

        this.playerBackupZone = new PlayerBackupField({
            scene: this,
            name: 'Backup',
            x: screenWidth / 2 - 150,
            y: window.screen.height - 500,
            width: screenWidth * .7,
            height: 150
        });

        this.playerDeck = new PlayerDeck({
            scene: this,
            name: 'Deck',
            x: screenWidth - 425,
            y: window.screen.height - 500,
            width: 125,
            height: 150
        });

        this.playerDamageZone = new PlayerDamageZone({
            scene: this,
            name: 'Damage',
            x: 125,
            y: window.screen.height - 525,
            width: 150,
            height: (this.playerHand.height * 2) + (this.playerHand.y - this.playerBackupZone.y) / 2
        });

        this.playerBreakZone = new PlayerBreakZone({
            scene: this,
            name: 'BreakZone',
            x: screenWidth - 425,
            y: window.screen.height - 300,
            width: 125,
            height: 150
        });


        for (let c = 0; c < 10; c++) {

            const column = 20 + (c * 100);
            const row = 300 * ((c % 3) || 1);

            const newCard = new CardDraggable({
                scene: this,
                name: `Card`,
                // x: this.playerDeck.x + (c * 2),
                // y: this.playerDeck.y + (c * 2),
                x: 500,
                y: 500,
                image: `card${c}`,
                imageBack: 'card-back',
                card: 'playercard',
                ondragend: (pointer, gameObject, dropped) => {
                    console.log('End Drag');
                }
            });
            this.playerDeck.addCard(newCard);
        }

        this.input.on(DRAG, (pointer, gameObject, dragX, dragY) => {
            if (!gameObject.draggable) {
                return;
            }
            gameObject.dragging = true;
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        this.input.on(DROP, (pointer, gameObject: CardDraggable, dropZone: GameZone) => {
            const currentZone = gameObject.getData('currentZone');
            console.log('Leaving Zone: ', currentZone);
            if (currentZone === 'Hand') {
                this.playerHand.removeCard(gameObject);
            } else if (currentZone === 'Deck') {
                this.playerDeck.removeCard(gameObject);
            } else if (currentZone === 'Damage') {
                this.playerDamageZone.removeCard(gameObject);
            } else if (currentZone === 'Break') {
                this.playerBreakZone.removeCard(gameObject);
            } else if (currentZone === 'Backup') {
                this.playerBackupZone.removeCard(gameObject);
            } else {
                console.log('was nowhere');
            }
            console.log('Dropzone name: ', dropZone.name);
            gameObject.setData('currentZone', dropZone.name);

            this.children.bringToTop(gameObject);

            if (dropZone.shouldStack()) {
                gameObject.x = dropZone.x;
                gameObject.y = dropZone.y;
            } else {
                gameObject.x = dropZone.x - (gameObject.width * dropZone.cards.length);
                gameObject.y = dropZone.y;
            }

            if (dropZone.shouldBeShown()) {
                gameObject.flipForward();
            } else {
                gameObject.flipBack();
            }

            if (dropZone.shouldBeSideways()) {
                gameObject.tap();
            } else {
                gameObject.untap();
            }

            gameObject.originalX = gameObject.x;
            gameObject.originalY = gameObject.y;

            dropZone.addCard(gameObject);
        });

        this.input.on(DRAG_END, (pointer, gameObject: CardDraggable, dropped) => {
            if (!dropped) {
                gameObject.x = gameObject.originalX;
                gameObject.y = gameObject.originalY;
                gameObject.flipBack();
                this.playerDeck.removeCard(gameObject);
                this.playerHand.removeCard(gameObject);
                gameObject.setData('currentZone', null);
                gameObject.untap();
            }
            gameObject.dragging = false;
            gameObject.onDragEnd(pointer, gameObject, dropped);
        });
    }
}
