import { NgModule } from '@angular/core'

import { DriverListPage } from './driver-list.page'

import { DriverListRoutes } from './driver-list.routing'

@NgModule({
    imports: [
        DriverListRoutes
    ],
    declarations: [
        DriverListPage
    ]
})
export class DriverListModule {
}
