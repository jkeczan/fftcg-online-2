import {Injectable} from '@angular/core';
import {APIService, CreateCardDesignerMutation, CreateCardMutation, ListCardDesignersQuery, ListCardsQuery} from '../services/api.service';
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
            const jobs = newCard.jobs;
            delete newCard.cardCategories;
            delete newCard.jobs;

            newCard.cardHash = uuid4();
            newCard.imageSource = newCard.serialNumber;
            mutation = await this.api.CreateCard(newCard);
            await this.linkCardCategories(mutation.id, categories);
            await this.linkCardJobs(mutation.id, jobs);
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

    async linkCardJobs(cardID: string, jobs) {
        for (const job of jobs) {
            await this.api.CreateCardJobConnection(
                {
                    cardID,
                    jobID: job.id
                }
            );
        }
    }

    async getAllCards() {
        const query: ListCardsQuery = await this.api.ListCards();
        return query.items;
    }

    async getAllCardDesigners() {
        const query: ListCardDesignersQuery = await this.api.ListCardDesigners();
        return query.items;
    }

    async createCardDesigner(newDesigner) {
        const newDesignerQuery: CreateCardDesignerMutation = await this.api.CreateCardDesigner(newDesigner);
        return newDesignerQuery;
    }
}
