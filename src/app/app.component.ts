import { Component } from '@angular/core';
import 'rxjs/Rx'
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'app-root',
  template: `
      <div class="col-xs-8 col-xs-offset-2">
          <h1>{{ title }}</h1>
          <input type="text" class="form-control" [(ngModel)]="searchCar">
          <hr>
          <ul class="list-group">
              <li
                  class="list-group-item"
                  *ngFor="let car of cars | carFilter:searchCar:'descr'; let i = index"
              ><b>{{ i + 1 }}</b> {{car.name}} <i>{{ car.descr }}</i></li>
          </ul>
      </div>
  `
})
export class AppComponent {
    searchCar = ''
    cars = [
        {name: 'Ford', descr: 'WFM 1'},
        {name: 'Mazda', descr: 'WFM 2'},
        {name: 'Bently', descr: 'WFM 3'},
        {name: 'Audi', descr: 'WFM 4'},
        {name: 'Mercedes', descr: 'WFM 5'},
        {name: 'BWM', descr: 'WFM 6'}
    ]

    title = ''
    asyncTitle = Observable.of('Async Title 3 seconds')
        .delay(3000)
        .subscribe( (str) => this.title = str )
}
