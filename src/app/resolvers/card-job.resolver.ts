import {Injectable} from '@angular/core';
import {CardJob, ListCardJobsQuery} from '../services/api.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {JobsService} from '../services/jobs.service';

@Injectable({
    providedIn: 'root'
})
export class CardJobsResolver implements Resolve<CardJob[]> {

    constructor(private jobService: JobsService) {
    }

    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<CardJob[]> {
        return this.jobService.getJobs();
    }
}
