import {Injectable} from '@angular/core';
import {APIService, CreateGameInput, Game, GameStatus} from "./api.service";
import {AuthService} from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class GamesService {

    constructor(private apiService: APIService, private authService: AuthService) {
    }

    getOpenGames() {
        return this.apiService.ListGames({
            game_status: {
                eq: GameStatus.AWAITING_PLAYER
            }
        });
    }

    async createGame(input: CreateGameInput): Promise<Game> {
        input.game_status = GameStatus.AWAITING_PLAYER;
        input.createdOn = new Date().toISOString();
        input.updatedOn = new Date().toISOString();

        return this.apiService.CreateGame(input);
    }
}
