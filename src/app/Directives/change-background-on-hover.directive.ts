import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appChangeBackgroundOnHover]'
})
export class ChangeBackgroundOnHoverDirective {
  @Input() target: HTMLImageElement;
  constructor(private el: ElementRef<HTMLImageElement>, private renderer: Renderer2) { }

  @HostListener('mouseover') onMouseOver() {
    this.ChangeBackgroundImg();
  }

  ChangeBackgroundImg() {
    // use the Renderer2 service to set the attribute
    this.renderer.setAttribute(this.target, 'src', this.el.nativeElement.src);
    // Add fade-in css class
   this.renderer.addClass(this.target, 'fade-in');
 }
}
