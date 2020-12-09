import {Injectable} from '@angular/core';
import {APIService, CreateCardMutation, ListCardsQuery} from '../services/api.service';
import {Storage} from 'aws-amplify';
import {uuid4} from '@capacitor/core/dist/esm/util';

@Injectable({
    providedIn: 'root'
})
export class CardService {

    constructor(private api: APIService) {
    }

    async createCard(newCard: any, cardImageSource: any) {
        let mutation: CreateCardMutation;
        const uploadedCardImage = await Storage.put(newCard.serialNumber, cardImageSource, {
            contentType: 'image/jpg'
        });

        if (uploadedCardImage) {
            const categories = newCard.cardCategories;
            delete newCard.cardCategories;

            newCard.cardHash = uuid4();
            newCard.imageSource = newCard.serialNumber;
            mutation = await this.api.CreateCard(newCard);
            await this.linkCardCategories(mutation.id, categories);
        }
        return mutation;
    }

    async linkCardCategories(cardID: string, categories) {
        for (const category of categories) {
            await this.api.CreateCardCategoryConnection(
                {
                    cardID,
                    categoryID: category.id
                });
        }
    }

    async getAllCards() {
        const query: ListCardsQuery = await this.api.ListCards();
        return query.items;
    }
}
