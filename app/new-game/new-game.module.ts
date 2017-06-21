import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { ApiService } from '../shared/api-service/api.service'

import { NewGameRoutes } from './new-game.routing'
import { NewGamePage } from './new-game.page'
import { NewGameComponent } from'./new-game-form.component'

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpModule,
        NewGameRoutes
    ],
    declarations: [
        NewGamePage,
        NewGameComponent
    ],
    providers: [
        ApiService
    ]
})
export class NewGameModule {
}
