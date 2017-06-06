import {Component, OnInit} from '@angular/core';
import { DriverService } from "../shared/driver-service/driver.service";
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    templateUrl: 'driver-list.template.html'
})
export class DriverListPage implements OnInit{
    drivers: any[]

    constructor( private  driverService: DriverService ) {}

    ngOnInit() {
        this.loadDrivers()
    }

    loadDrivers() {
        this.driverService.getAllDrivers()
            .subscribe(drivers => this.drivers = drivers)
    }
}
