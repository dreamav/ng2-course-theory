import {Component, ElementRef, Input, ContentChild} from '@angular/core';

@Component({
  selector: '.app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent{
    @Input('carItem') car:{name:string, year:number}
    @ContentChild('carHeading') carH: ElementRef

    ngAfterViewInit(){
        console.log(this.carH.nativeElement.innerText)
    }
}

