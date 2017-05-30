import { Routes } from '@angular/router'

import { DriverPage } from './driver/driver.page'
import { DriverListPage } from './driver-list/driver-list.page'

export const routes: Routes = [
    { path: '', component: DriverListPage },
    { path: 'drivers', component: DriverListPage },
    { path: 'drivers/:driverId', component: DriverPage }
]