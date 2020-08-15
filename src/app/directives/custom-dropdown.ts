import {Directive, HostListener, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropOpen]'
})
export class DropOpenDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseover') onMouseOver() {
      const elementCollection = document.getElementsByClassName('navbar');
    if (elementCollection[0].clientWidth > 1007) {
    this.renderer.addClass(this.el.nativeElement, 'open');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, 'open');
  }
}