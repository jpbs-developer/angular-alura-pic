import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appImmediateClick]',
})
export class ImmediateClickDirective implements OnInit {
  constructor(private el: ElementRef<any>, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.selectRootElement(this.el.nativeElement).click();
  }
}
