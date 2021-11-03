import {Injectable} from '@angular/core';
import {APIService, CardElement} from '../services/api.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {CardService} from '../services/card.service';

@Injectable({
    providedIn: 'root'
})
export class CardElementsResolver implements Resolve<string[]> {

    constructor(private cardService: CardService) {
    }

    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<string[]> {
        return Promise.resolve(this.cardService.elements);
    }
}
