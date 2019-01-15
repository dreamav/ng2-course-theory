import {Component, OnInit} from '@angular/core';
import {CarsService} from "./cars.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{

    constructor (private carsService: CarsService){

    }

    cars = [];

    ngOnInit(){
        this.carsService
            .getCars()              // вернет Observable
            .subscribe((response) => {
                console.log(response)
            })
    }
}
