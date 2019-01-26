import {animate, state, style, transition, trigger} from "@angular/animations";

export const divTrigger = trigger('divTrigger',[
  transition(':enter', [
    style({
      width: '*',
      height: '*'
    }),
    animate(2000, style({
      width:'200px',
      height:'200px',
      backgroundColor: 'blue'
    })),
    animate(1000)
  ]),
  transition(':leave', animate(500, style({opacity:0})))
]);
