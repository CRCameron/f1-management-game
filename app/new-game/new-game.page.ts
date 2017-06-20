import { Component, OnInit } from '@angular/core';

import { ApiService } from '../shared/api-service/api.service'

import { Team } from '../models/team.model'

declare const $: any;

@Component({
    moduleId: module.id,
    templateUrl: 'new-game.template.html'
})
export class NewGamePage implements OnInit{
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


        $('.datepicker').pickadate({
            selectMonths: true,
            selectYears: 15
        });
    }
}