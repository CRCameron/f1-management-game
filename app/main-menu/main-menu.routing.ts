import { RouterModule, Routes } from '@angular/router'

import { MainMenuPage } from './main-menu.page'

const mainMenuRoutes: Routes = [
    { path: 'drivers',
        children: [
            { path: '',  component: MainMenuPage }
        ]
    }
];

export const MainMenuRoutes = RouterModule.forChild(mainMenuRoutes);