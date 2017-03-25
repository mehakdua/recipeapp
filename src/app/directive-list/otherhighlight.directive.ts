import { Directive,ElementRef}  from '@angular/core';
@Directive({
  selector: '[myOtherhighlight]'
})
export class OtherhighlightDirective {
	
  constructor(private elementRef:ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor= 'yellow';
  	
   }

}
