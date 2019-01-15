import {Component} from '@angular/core';
import {CarsService} from "./cars.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent{

    constructor (private carsService: CarsService){

    }

    cars = [];

    loadCars(){
        this.carsService
            .getCars()              // вернет Observable
            .subscribe((response) => {
                console.log(response)
            })
    }
}
