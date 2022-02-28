import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})

export class HighlightDirective {
  @Input() appHighlight = 'gray';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  
  constructor(private element: ElementRef) {
    element.nativeElement.style.backgroundColor = this.appHighlight;
  }

  private highlight(color: string): void {
    this.element.nativeElement.style.backgroundColor = color;
  }

}