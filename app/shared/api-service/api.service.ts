import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Team } from '../../models/team.model'
import { Observable } from 'rxjs/Rx'

@Injectable()
export class ApiService {
    private teamsUrl = 'http://localhost:8080/teams'
    constructor(private _http: Http) {}

    getTeams(): Observable<Team[]> {
        return this._http.get(this.teamsUrl)
            .map((res: Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error))
    }
}