import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';
import {element} from "protractor";

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {

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
