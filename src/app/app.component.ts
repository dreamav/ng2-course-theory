import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div class="col-xs-8 col-xs-offset-2">
          <ul class="list-group">
              <li
                  class="list-group-item"
                  *ngFor="let car of cars; let i = index"
              ><b>{{ i + 1 }}</b> {{car.name}} </li>
          </ul>
      </div>
  `
})
export class AppComponent {
    cars = [
        {name: 'Ford', descr: 'WFM 1'},
        {name: 'Mazda', descr: 'WFM 2'},
        {name: 'Bently', descr: 'WFM 3'},
        {name: 'Audi', descr: 'WFM 4'},
        {name: 'Mercedes', descr: 'WFM 5'},
        {name: 'BWM', descr: 'WFM 6'}
    ]
}
