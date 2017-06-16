import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'

import { MainMenuModule } from './main-menu/main-menu.module'
import { NewGameModule } from './new-game/new-game.module'

import { routes } from './app.routing'

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        MainMenuModule,
        NewGameModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
