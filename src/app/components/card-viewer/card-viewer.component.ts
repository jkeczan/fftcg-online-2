import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../services/api.service';

@Component({
    selector: 'app-card-viewer',
    templateUrl: './card-viewer.component.html',
    styleUrls: ['./card-viewer.component.scss'],
})
export class CardViewerComponent implements OnInit {

    @Input()
    card: Card;

    constructor() {
    }

    ngOnInit() {
    }

    isForward() {
        // return this.card ? this.card.cardType === FFTCGCardType.Forward : null;
    }

    isBackup() {
        // return this.card ? this.card.cardType === FFTCGCardType.Backup : null;
    }

    isMonster() {
        // return this.card ? this.card.cardType === FFTCGCardType.Monster : null;
    }

    isSummon() {
        // return this.card ? this.card.cardType === FFTCGCardType.Summon : null;
    }

}
