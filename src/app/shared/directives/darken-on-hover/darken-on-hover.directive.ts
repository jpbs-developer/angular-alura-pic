import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDarkenOnHover]',
})
export class DarkenOnHoverDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') darkenOn() {
    this.renderer.setStyle(this.el.nativeElement, 'filter', 'brightness(20%)');
  }

  @HostListener('mouseleave') darkenOff() {
    this.renderer.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
  }
}
