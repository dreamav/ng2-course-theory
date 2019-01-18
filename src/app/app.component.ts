import {Component, OnInit} from '@angular/core';
import {CarsService} from "./cars.service";

interface Cars {
  name: string,
  color: string,
  id: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  colors = [
    'red',
    'blue',
    'green',
    'pink',
    'yelllow',
    'grey'
  ];
  cars: any;
  carName: string;

  constructor(private carsService: CarsService) {
  }

  appTitle;
  ngOnInit() {
    this.appTitle = this.carsService.getAppTitle()
  }


    loadCars() {
      this.cars = this.carsService.getCars()
    }
    addCar() {
      this.carsService
        .addCar(this.carName)
        .subscribe((car: Cars) => {
          // console.log(json)
          this.cars.push(car);
        })
    }
    getRandColor() {
      const num = Math.round(Math.random() * (this.colors.length - 1));
      return this.colors[num];
    }
    setNewColor(car: Cars) {
      this.carsService.changeColor(car, this.getRandColor())
        .subscribe((data) => {
          console.log(data);
        })
    }
    deleteCar(car: Cars) {
      this.carsService.deleteCar(car)
        .subscribe((data) => {
          this.cars = this.cars.filter(c => c.id !== car.id);
        })
    }
  }
