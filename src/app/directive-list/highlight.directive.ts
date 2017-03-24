import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[rbHighlight]'
})
export class HighlightDirective {
	
  constructor(private elementRef:ElementRef) {
  console.log(this.elementRef.nativeElement);
  	this.elementRef.nativeElement.style.color='orange';
   }

}
