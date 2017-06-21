import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Team } from '../models/team.model'

@Component({
    moduleId: module.id,
    selector: 'new-game-form',
    templateUrl: 'new-game-form.template.html'
})
export class NewGameComponent implements OnInit {
    newGameForm: FormGroup
    @Input() teams: Team[];
    @Input() onSubmit;
    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.newGameForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            dob: ['', Validators.required],
            nationality: ['', Validators.required],
            anything: ['', Validators.required]
        })
    }
}