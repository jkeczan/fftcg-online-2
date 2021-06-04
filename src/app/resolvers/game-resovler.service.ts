import { Injectable } from '@angular/core';
import {APIService} from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class GameResovlerService {

  constructor(private apiService: APIService) { }

  resolve() {
    return this.apiService.ListGames();
  }
}
