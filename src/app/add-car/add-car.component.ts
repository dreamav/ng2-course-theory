import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

    carName = ''
    carYear = 2017
    @Output('onAddCar') carEmitter = new EventEmitter<{name:string,year:number}>()

    addCar(carNameEl:HTMLInputElement){
        console.log(carNameEl.value)

        this.carEmitter.emit({
            name: carNameEl.value,
            year: this.carYear
        })
        carNameEl.value = ""
        this.carYear = 2017
    }

  constructor() { }

  ngOnInit() {
  }

}
