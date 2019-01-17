import {Component} from '@angular/core';
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
export class AppComponent{
    colors = [
        'red',
        'blue',
        'green',
        'pink',
        'yelllow',
        'grey'
    ];
    cars: Cars[] = [];
    carName: string;

    constructor (private carsService: CarsService){}

    loadCars(){
        this.carsService
            .getCars()
            .subscribe( (cars: Cars[]) => {
                this.cars = cars
            })
    }

    addCar(){
        this.carsService
            .addCar(this.carName)
            .subscribe((car:Cars)=>{
                // console.log(json)
                this.cars.push(car);
            })
    }

    getRandColor(){
        const num = Math.round(Math.random() * (this.colors.length - 1));
        return this.colors[num];
    }
    setNewColor(id:number){
        this.carsService.changeColor(id)
    }
}
