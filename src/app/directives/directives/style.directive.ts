import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log(el);
    el.nativeElement.style.color = 'red'; // не очень хороший способ, так нормально если только для веба
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
  }

  @HostListener('click', ['$event.target']) onClick(event: Event): void {
    console.log(event);
  }

  @HostListener('mouseenter') onEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
  }

  @HostListener('mouseleave') onLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'color', null);
  }

}
