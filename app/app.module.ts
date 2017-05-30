import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { routes } from './app.routing'
import {DriverModule} from "./driver/driver.module";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        DriverModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [/* TODO: Providers go here */],
    bootstrap: [AppComponent],
})
export class AppModule {
}
