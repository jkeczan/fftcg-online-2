import { Injectable } from '@angular/core';
import {APIService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private apiService: APIService) { }

  async getJobs() {
    return (await this.apiService.ListCardJobs()).items.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
  }
}
