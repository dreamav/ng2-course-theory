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

    formData = {};
    isSubmitted = false;

    addRandEmail(){
        const randEmail = 'reloved@gmail.com';
        this.form.form.patchValue({
            user:{email:randEmail}
        })
    }

    submitForm(){
        this.isSubmitted = true;
        this.formData = this.form.value;
    }


}
