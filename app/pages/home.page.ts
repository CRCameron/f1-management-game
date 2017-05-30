import {Component, OnInit} from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'home.template.html'
})
export class HomeComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
        console.log('HomeComponent')
    }
}