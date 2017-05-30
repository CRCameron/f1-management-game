import { RouterModule, Routes } from '@angular/router'

import { DriverListPage } from './driver-list.page'

const driverListRoutes: Routes = [
    { path: 'drivers',
        children: [
            { path: '',  component: DriverListPage }
        ]
    }
];

export const DriverListRoutes = RouterModule.forChild(driverListRoutes);