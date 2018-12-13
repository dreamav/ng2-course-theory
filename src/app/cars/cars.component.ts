import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

    canAddCar = false

    constructor() {
        setTimeout(()=>{
            this.canAddCar = true
        }, 3000)
    }

}
