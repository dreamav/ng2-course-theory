import {Component, ElementRef, Input, ContentChild, OnInit, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: '.app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit,OnChanges{
    @Input('carItem') car:{name:string, year:number}
    @Input() name:string
    @ContentChild('carHeading') carH: ElementRef

    constructor(){
        console.log('constructor')
    }

    ngOnInit() {
        console.log('ngOnInit')
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges', changes)
    }
}

