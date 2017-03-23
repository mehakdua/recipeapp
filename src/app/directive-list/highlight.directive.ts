import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[rbHighlight]'
})
export class HighlightDirective {
	
  constructor(private elementRef:ElementRef) {
  	this.elementRef.nativeElement.style.backgroundColor='orange';
   }

}
