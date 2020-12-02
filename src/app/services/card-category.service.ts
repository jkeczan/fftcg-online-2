import {Injectable} from '@angular/core';
import {APIService, ListCardCategorysQuery} from '../API.service';

@Injectable({
    providedIn: 'root'
})
export class CardCategoryService {
    constructor(private api: APIService) {
    }

    async getAllCategories() {
        const query: ListCardCategorysQuery = await this.api.ListCardCategorys(null, 100);
        return query.items;
    }
}
