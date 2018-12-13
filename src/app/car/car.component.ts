import { Component } from '@angular/core';

@Component({
  selector: '.app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent{
    carName = "Жигуль"
    carYear = 1992

    getName(){
        return this.carName
    }
}
