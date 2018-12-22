import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';
import {element} from "protractor";

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit() {
  }

  @HostListener('mouseenter') mouseEnter(){
      const {nativeElement} = this.element
      this.renderer.setStyle(nativeElement, 'background-color', 'blue')
      this.renderer.addClass(nativeElement, 'white-text')
  }
  @HostListener('mouseleave') mouseLeave(){
      const {nativeElement} = this.element
      this.renderer.setStyle(nativeElement, 'background-color', 'transparent')
      this.renderer.removeClass(nativeElement, 'white-text')
  }
}
