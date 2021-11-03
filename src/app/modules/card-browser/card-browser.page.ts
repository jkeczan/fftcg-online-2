import {Component, OnInit} from '@angular/core';
import {Card, CardElement} from '../../services/api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-card-browser',
    templateUrl: './card-browser.page.html',
    styleUrls: ['./card-browser.page.scss'],
})
export class CardBrowserPage implements OnInit {
    public cards: Card[];
    public elements: CardElement[];

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.cards = this.activatedRoute.snapshot.data.cards;
        this.elements = this.activatedRoute.snapshot.data.elements;
    }
}
