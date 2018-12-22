import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';
import {element} from "protractor";

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {
    @Input('appBackground') hoverColor:string = 'green'
    @Input() defaultColor:string = 'transparent'
    @HostBinding('style.backgroundColor') background: string

  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit() {
  }

  @HostListener('mouseenter') mouseEnter(){
      this.background = 'green'
  }
  @HostListener('mouseleave') mouseLeave(){
      this.background = 'transparent'
  }
}
