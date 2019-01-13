import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
    answers = [{
        type: 'yes',
        text: 'Да'
    }, {
        type: 'no',
        text: 'Нет'
    }];

    form: FormGroup;

    ngOnInit(){
        this.form = new FormGroup({
            user: new FormGroup({
                email: new FormControl('',[Validators.required,Validators.required]),
                pass: new FormControl('',[Validators.required, this.checkForLength]),
            }),
            country: new FormControl('ua'),
            answer: new FormControl('no'),
        })
    }

    onSubmit(){
        console.log('Submitted', this.form);
    }

    checkForLength(control:FormControl){
        if(control.value.length <= 4){
            return {'lengthError': true}
        }
        return null
    }
}
