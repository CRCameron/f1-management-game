import { NgModule } from '@angular/core'

import { MainMenuRoutes } from './main-menu.routing'
import { MainMenuPage } from './main-menu.page'

@NgModule({
    imports: [
        MainMenuRoutes
    ],
    declarations: [
        MainMenuPage
    ],
    providers: [
    ]
})
export class MainMenuModule {
}
