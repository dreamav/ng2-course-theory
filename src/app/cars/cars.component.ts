import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

    addCarStatus = ""

    constructor() {}

    addCar(){
        this.addCarStatus = "Машина добавлена"
    }

}
