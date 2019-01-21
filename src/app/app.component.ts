import { Component } from '@angular/core';
import {state, style, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('clickedDiv', [
      state('start', style({
        backgroundColor: 'blue',
        width: '150px',
        height: '150px'
      })),
      state('end', style({
        backgroundColor: 'blue',
        width: '150px',
        height: '150px'
      }))
    ])
  ]
})
export class AppComponent {
}
