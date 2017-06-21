import { Component, OnInit } from '@angular/core';

import { ApiService } from '../shared/api-service/api.service'

import { Team } from '../models/team.model'
import {FormGroup} from "@angular/forms";

declare const $: any;

@Component({
    moduleId: module.id,
    templateUrl: 'new-game.template.html'
})
export class NewGamePage implements OnInit{ //TODO: Add form validation
    teams: Team[] = []

    constructor(private apiService: ApiService) {}

    ngOnInit() {
        this.apiService.getTeams().subscribe(teams => {
            this.teams = teams.map(team => {
                return {
                    constructorId: team.constructorId,
                    name: team.name,
                    nationality: team.nationality,
                    money: 20000000
                }
            })
        })
    }

    startGame(formData: FormGroup) {
        console.log(formData)
    }
}