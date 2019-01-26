import {animate, group, state, style, transition, trigger} from "@angular/animations";

export const divTrigger = trigger('divTrigger',[
  transition(':enter', [
    style({
      width: '*',
      height: '*'
    }),
    group([
      animate(3000, style({
        width:'200px',
        height:'200px'
      })),
      animate(6000, style({
        backgroundColor: 'blue'
      }))
    ]),
    animate(1000)
  ]),
  transition(':leave', animate(500, style({opacity:0})))
]);
