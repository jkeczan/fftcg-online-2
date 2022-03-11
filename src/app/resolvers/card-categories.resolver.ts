import {Injectable} from '@angular/core';
import {CardCategory, CardJob, ListCardJobsQuery} from '../services/api.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {JobsService} from '../services/jobs.service';
import {CardCategoryService} from '../services/card-category.service';

@Injectable({
    providedIn: 'root'
})
export class CardCategoriesResolver implements Resolve<CardCategory[]> {

    constructor(private categoryService: CardCategoryService) {
    }

    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<CardCategory[]> {
        return this.categoryService.getAllCategories();
    }
}
