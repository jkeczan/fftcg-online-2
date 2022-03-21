import CardBase, {ICardConfig} from './card_base';

// tslint:disable-next-line:component-class-suffix
export default class CardDraggable extends CardBase {
    private _originalX: number;
    private _originalY: number;
    private _draggable: boolean;
    private _dragging: boolean;

    constructor(config: ICardConfig) {
        super(config);
        this._originalX = this.x;
        this._originalY = this.y;
        this._draggable = true;
        this._dragging = false;
        this.setInteractive();
        this.scene.input.setDraggable(this);
    }


    setStartDragPosition() {
        this.originalX = this.x;
        this.originalY = this.y;
    }


    public snapBack(): void {
        this.x = this.originalX;
        this.y = this.originalY;
    }

    public updateGamePosition(x?: number, y?: number) {
        if (x) {
            this.x = x;
        }

        if (y) {
            this.y = y;
        }
    }

    get originalX(): number {
        return this._originalX;
    }

    set originalX(value: number) {
        this._originalX = value;
    }

    get originalY(): number {
        return this._originalY;
    }

    set originalY(value: number) {
        this._originalY = value;
    }

    get draggable(): boolean {
        return this._draggable;
    }

    set draggable(value: boolean) {
        this._draggable = value;
    }

    get dragging(): boolean {
        return this._dragging;
    }

    set dragging(value: boolean) {
        this._dragging = value;
    }
}
