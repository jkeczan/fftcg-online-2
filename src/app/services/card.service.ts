import {Injectable} from '@angular/core';
import {APIService, CreateCardInput, CreateCardMutation, ListCardsQuery} from '../API.service';

@Injectable({
    providedIn: 'root'
})
export class CardService {

    constructor(private api: APIService) {
    }

    async createCard(newCard: CreateCardInput) {
        const mutation: CreateCardMutation = await this.api.CreateCard(newCard);
        return mutation;
    }

    async getAllCards() {
        const query: ListCardsQuery = await this.api.ListCards();
        return query.items;
    }
}
