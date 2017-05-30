import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'

import { DriverModule } from './driver/driver.module'
import { DriverListModule } from './driver-list/driver-list.module'

import { routes } from './app.routing'

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        DriverModule,
        DriverListModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
