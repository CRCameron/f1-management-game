import { RouterModule, Routes } from '@angular/router'

import { NewGamePage } from './new-game.page'

const newGameRoutes: Routes = [
    { path: 'new-game',
        children: [
            { path: '',  component: NewGamePage }
        ]
    }
];

export const NewGameRoutes = RouterModule.forChild(newGameRoutes);