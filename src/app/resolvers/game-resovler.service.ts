import {Injectable} from '@angular/core';
import {APIService, Game, ListGamesQuery} from '../services/api.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class GameResovlerService implements Resolve<ListGamesQuery> {

    constructor(private apiService: APIService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<ListGamesQuery> {
        return this.apiService.ListGames();
    }


}
