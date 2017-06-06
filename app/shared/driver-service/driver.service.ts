import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Driver } from '../../models/driver.model';

@Injectable()
export class DriverService {
    constructor( private http: Http) {}

    private baseUrl = 'http://localhost:8080'

    getAllDrivers() {
        const url = `${this.baseUrl}/drivers`
        return this.http.get(url)
            .map((response: Response) => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}