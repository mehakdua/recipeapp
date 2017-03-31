import { Directive,ElementRef ,Renderer,HostListener, Input,OnInit} from '@angular/core';
@Directive({
  selector: '[rbHighlight]'
})
export class HighlightDirective {
constructor(private el: ElementRef) { }
@Input() defaultColor: string;

  @Input() highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }


}
