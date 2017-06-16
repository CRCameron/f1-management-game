import { Routes } from '@angular/router'

import { MainMenuPage } from './main-menu/main-menu.page'
import { NewGamePage } from './new-game/new-game.page'

export const routes: Routes = [
    { path: '', component: MainMenuPage },
    { path: 'new-game', component: NewGamePage }
]