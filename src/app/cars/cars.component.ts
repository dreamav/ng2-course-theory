import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit{

    cars: [{name:string,year:number}] = [{
        name: 'Ford',
        year: 2015
    },
    //     {
    //     name: 'Mazda',
    //     year: 2010
    // },{
    //     name: 'Audi',
    //     year: 2017
    // }
    ]

    updateCarlist(car: {name:string, year:number}){
        this.cars.push(car)
    }

    changeCarName(){
        this.cars[0].name= "New car name!"
    }

    constructor() {}

    ngOnInit(){
        console.log('cars ngonInit')
    }

}
