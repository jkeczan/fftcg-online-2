import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './guards/auth.guard';
import {UnauthGuard} from './guards/unauth.guard';
import {CardsResolver} from './resolvers/cards.resolver';
import {GameResovlerService} from './resolvers/game-resovler.service';

const routes: Routes = [

    // {
    //     path: 'game',
    //     loadChildren: () => import('./game/game.module').then(m => m.GamePageModule),
    //     canActivate: [AuthGuard]
    // },
    {
        path: 'card-uploader',
        loadChildren: () => import('./card-uploader/card-uploader.module').then(m => m.CardUploaderPageModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
        canActivate: [UnauthGuard]
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'game-lobby',
        loadChildren: () => import('./pages/game-lobby/game-lobby.module').then(m => m.GameLobbyPageModule),
        resolve: {
            games: GameResovlerService
        }
    },
    {
        path: 'browser',
        loadChildren: () => import('./pages/card-browser/card-browser.module').then(m => m.CardBrowserPageModule),
        resolve: {
            cards: CardsResolver
        }
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },


];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
