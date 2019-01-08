import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    @ViewChild('form') form: NgForm;

    answers = [{
        type: 'yes',
        text: 'Да'
    }, {
        type: 'no',
        text: 'Нет'
    }];

    defaultAnswer = 'yes';
    defaultCountry = 'ua';

    addRandEmail(){
        const randEmail = 'reloved@gmail.com';
        this.form.setValue({
            user:{
                pass:'',
                email: randEmail
            },
            country: '',
            answer: ''
        })
    }

    submitForm(){
        console.log("Submitted!", this.form);
    }


}
