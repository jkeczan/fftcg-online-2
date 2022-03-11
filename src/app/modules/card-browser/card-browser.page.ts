import {Component, OnInit} from '@angular/core';
import {Card, CardCategory, CardElement, CardJob} from '../../services/api.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-card-browser',
    templateUrl: './card-browser.page.html',
    styleUrls: ['./card-browser.page.scss'],
})
export class CardBrowserPage implements OnInit {
    public cards: Card[];
    public elements: CardElement[];
    public jobs: CardJob[];
    public categories: CardCategory[];

    public cardTypes = [
        'Forward',
        'Backup',
        'Monster',
        'Summon'
    ];

    public rarities = [
        'COMMON',
        'RARE',
        'HERO',
        'LEGEND'
    ];

    public filterFormGroup: FormGroup;

    constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {
        this.filterFormGroup = this.formBuilder.group({
            elements: [],
            jobs: [],
            categories: [],
            rarity: [],
            cardTypes: []
        });
    }

    ngOnInit() {
        this.cards = this.activatedRoute.snapshot.data.cards;
        this.elements = this.activatedRoute.snapshot.data.elements;
        this.jobs = this.activatedRoute.snapshot.data.jobs;
        this.categories = this.activatedRoute.snapshot.data.categories;

        this.filterFormGroup.valueChanges.subscribe((newFilters: Partial<Card>) => {
            this.onFilterFormChange(newFilters);
        });
    }

    onFilterFormChange(filters: Partial<Card>) {
    }
}
