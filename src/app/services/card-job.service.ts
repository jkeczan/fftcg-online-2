import {Injectable} from '@angular/core';
import {APIService, CreateCardJobInput, CreateCardJobMutation, ListCardJobsQuery} from '../API.service';

@Injectable({
    providedIn: 'root'
})
export class CardJobService {

    constructor(private api: APIService) {
    }

    async getAllJobs() {
        const query: ListCardJobsQuery = await this.api.ListCardJobs(null, 200);
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

    async createJob(newJob: CreateCardJobInput) {
        const newJobQuery: CreateCardJobMutation = await this.api.CreateCardJob(newJob);
        return newJobQuery;
    }
}
