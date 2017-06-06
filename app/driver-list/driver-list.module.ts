import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'

import { DriverListPage } from './driver-list.page'

import { DriverListRoutes } from './driver-list.routing'

import { DriverService } from './../shared/driver-service/driver.service'

@NgModule({
    imports: [
        DriverListRoutes,
        HttpModule
    ],
    declarations: [
        DriverListPage
    ],
    providers: [
        DriverService
    ]
})
export class DriverListModule {
}
