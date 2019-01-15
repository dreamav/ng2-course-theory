import {Component} from '@angular/core';
import {CarsService} from "./cars.service";
import {Response} from "@angular/http";

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
            .subscribe((response: Response) => {
                const data = response.json()
                console.log(data)
            })
    }
}
