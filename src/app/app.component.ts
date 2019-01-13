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

    charLenth = 5;

    form: FormGroup;

    ngOnInit(){
        this.form = new FormGroup({
            user: new FormGroup({
                email: new FormControl('',[Validators.required,Validators.required]),
                pass: new FormControl('',[Validators.required, this.checkForLength.bind(this)]),
            }),
            country: new FormControl('ua'),
            answer: new FormControl('no'),
        })
    }

    onSubmit(){
        console.log('Submitted', this.form);
    }

    checkForLength(control:FormControl){
        if(control.value.length <= this.charLenth){
            return {'lengthError': true}
        }
        return null
    }
}
