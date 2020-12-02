import {Injectable} from '@angular/core';
import {APIService, CreateCardCategoryInput, CreateCardCategoryMutation, ListCardCategorysQuery} from '../API.service';

@Injectable({
    providedIn: 'root'
})
export class CardCategoryService {
    constructor(private api: APIService) {
    }

    async getAllCategories() {
        const query: ListCardCategorysQuery = await this.api.ListCardCategorys(null, 100);
        return query.items.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            } else if (a.name > b.name) {
                return 1;
            } else {
                return 0;
            }
        });
    }

    async createCategory(newCategory: CreateCardCategoryInput) {
        const mutation: CreateCardCategoryMutation = await this.api.CreateCardCategory(newCategory);
        return mutation;
    }
}
