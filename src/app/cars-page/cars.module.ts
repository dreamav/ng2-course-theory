import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarPageComponent} from "./car-page/car-page.component";
import {CarsPageComponent} from "./cars-page.component";
import {CarsService} from "../cars.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CarsPageComponent,
    CarPageComponent
  ],
  providers: [
    CarsService
  ]
})
export class CarsModule { }
