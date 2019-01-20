import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarPageComponent} from "./car-page/car-page.component";
import {CarsPageComponent} from "./cars-page.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CarsPageComponent,
    CarPageComponent
  ]
})
export class CarsModule { }
