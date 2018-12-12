import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  // templateUrl: './car.component.html',
    template:`
        <h2>Car here</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto deserunt dolor eaque eveniet harum iure laboriosam magni modi neque non nostrum nulla quas quasi, quos saepe sit sunt voluptatum.</p>
    `,
  // styleUrls: ['./car.component.css']
    styles:[`
        h2{
            color: brown;
        }
    `]
})
export class CarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
