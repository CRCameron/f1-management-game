import { NgModule } from '@angular/core'

import { NewGameRoutes } from './new-game.routing'
import { NewGamePage } from './new-game.page'

@NgModule({
    imports: [
        NewGameRoutes
    ],
    declarations: [
        NewGamePage
    ],
    providers: [
    ]
})
export class NewGameModule {
}
