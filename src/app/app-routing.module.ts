import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {GamePage} from './modules/game/game.page';

const routes: Routes = [

    {
        path: 'game',
        component: GamePage
    },
    // {
    //     path: 'card-uploader',
    //     loadChildren: () => import('./modules/card-uploader/card-uploader.module').then(m => m.CardUploaderPageModule),
    //     canActivate: [AuthGuard]
    // },
    // {
    //     path: 'login',
    //     loadChildren: () => import('./modules/login/login.module').then(m => m.LoginPageModule),
    //     canActivate: [UnauthGuard]
    // },
    // {
    //     path: 'home',
    //     loadChildren: () => import('./modules/home/home.module').then(m => m.HomePageModule)
    // },
    // {
    //     path: 'game-lobby',
    //     loadChildren: () => import('./pages/game-lobby/game-lobby.module').then(m => m.GameLobbyPageModule),
    //     resolve: {
    //         games: GameResovlerService
    //     }
    // },
    // {
    //     path: 'browser',
    //     loadChildren: () => import('./modules/card-browser/card-browser.module').then(m => m.CardBrowserPageModule),
    //     resolve: {
    //         cards: CardsResolver,
    //         elements: CardElementsResolver,
    //         jobs: CardJobsResolver,
    //         categories: CardCategoriesResolver
    //     }
    // },
    {
        path: '',
        redirectTo: 'game',
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
