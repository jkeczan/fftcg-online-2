import {Injectable} from '@angular/core';
import {APIService, Card, ListCardsQuery} from '../services/api.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {CardService} from '../services/card.service';

@Injectable({
    providedIn: 'root'
})
export class CardsResolver implements Resolve<Card[]> {

    constructor(private cardService: CardService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Card[]> {
        return this.cardService.getAllCards();
    }
}
