import {animate, state, style, transition, trigger} from "@angular/animations";

export const divTrigger = trigger('divTrigger',[
  transition('void => *', [
    style({opacity:0}),
    animate(500, style({
      opacity: 1
    }))
  ]),
  transition('* => void', animate(500, style({opacity:0})))
]);
