import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';
import {Card, ListCardsQuery} from '../../services/api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-card-browser',
  templateUrl: './card-browser.page.html',
  styleUrls: ['./card-browser.page.scss'],
})
export class CardBrowserPage implements OnInit {
  public cards: Card[];

  constructor(private menuControl: MenuController, private activatedRouteSnapshot: ActivatedRoute) { }

  ngOnInit() {
    this.cards = this.activatedRouteSnapshot.snapshot.data.cards;
  }

  async onMenuClick(){
    const menus = await this.menuControl.getMenus();
    const mainMenu: HTMLIonMenuElement = menus[0];

    await mainMenu.close(true);

    console.log(menus);
  }

}
