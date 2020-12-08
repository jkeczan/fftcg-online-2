import {Injectable} from '@angular/core';
import {APIService, CreateCardCategoryInput, CreateCardInput} from './api.service';

@Injectable()
export class ApiCustomService extends APIService {
    constructor() {
        super();
    }

    createCardWithRelations(card: CreateCardInput, category: CreateCardCategoryInput) {

    }
}
