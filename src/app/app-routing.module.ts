import {NgModule} from '@angular/core';
import {PreloadAllModules, PreloadingStrategy, RouterModule, Routes} from '@angular/router';
import {UnauthGuard} from './guards/unauth.guard';
import {CardsResolver} from './resolvers/cards.resolver';
import {CardElementsResolver} from './resolvers/card-elements.resolver';
import {AuthGuard} from './guards/auth.guard';
import {CardJobsResolver} from './resolvers/card-job.resolver';
import {CardCategoriesResolver} from './resolvers/card-categories.resolver';

const routes: Routes = [

    {
        path: 'game',
        loadChildren: () => import('./modules/game/game.module').then(m => m.GamePageModule)
    },
    {
        path: 'card-uploader',
        loadChildren: () => import('./modules/card-uploader/card-uploader.module').then(m => m.CardUploaderPageModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        loadChildren: () => import('./modules/login/login.module').then(m => m.LoginPageModule),
        canActivate: [UnauthGuard]
    },
    {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomePageModule)
    },
    // {
    //     path: 'game-lobby',
    //     loadChildren: () => import('./pages/game-lobby/game-lobby.module').then(m => m.GameLobbyPageModule),
    //     resolve: {
    //         games: GameResovlerService
    //     }
    // },
    {
        path: 'browser',
        loadChildren: () => import('./modules/card-browser/card-browser.module').then(m => m.CardBrowserPageModule),
        resolve: {
            cards: CardsResolver,
            elements: CardElementsResolver,
            jobs: CardJobsResolver,
            categories: CardCategoriesResolver
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
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
