import { Directive,ElementRef ,Renderer} from '@angular/core';
@Directive({
  selector: '[rbHighlight]'
})
export class HighlightDirective {
	
  constructor(elementRef:ElementRef) {
  	console.log('yes');
  elementRef.nativeElement.style.color= 'red';
  	
   }

}
