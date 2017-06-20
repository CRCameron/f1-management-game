import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http'

import { ApiService } from '../shared/api-service/api.service'

import { NewGameRoutes } from './new-game.routing'
import { NewGamePage } from './new-game.page'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        NewGameRoutes
    ],
    declarations: [
        NewGamePage
    ],
    providers: [
        ApiService
    ]
})
export class NewGameModule {
}
