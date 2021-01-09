import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle2]'
})
export class Style2Directive {

  @Input('appStyle2') color = 'blue';
  @Input() fontWeight = 'normal';
  @Input() dStyles: {border?: string, fontWeight?: string, borderRadius?: string};

  @HostBinding('style.color') elColor = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log(el);
    el.nativeElement.style.color = 'red'; // не очень хороший способ, так нормально если только для веба
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
  }

  @HostListener('click', ['$event.target']) onClick(event: Event): void {
    console.log(event);
  }

  @HostListener('mouseenter') onEnter() {
    // this.elColor = 'yellow';
    this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight);  // this.dStyles.fontWeight
    this.renderer.setStyle(this.el.nativeElement, 'border', this.dStyles.border);
    this.renderer.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles.borderRadius);
  }

  @HostListener('mouseleave') onLeave() {
    // this.elColor = null;
    this.renderer.setStyle(this.el.nativeElement, 'color', null);
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', null);
    this.renderer.setStyle(this.el.nativeElement, 'border', null);
    this.renderer.setStyle(this.el.nativeElement, 'borderRadius', null);
  }

}
