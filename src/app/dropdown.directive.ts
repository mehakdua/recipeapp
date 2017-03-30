import { Directive , HostBinding,HostListener } from '@angular/core';
@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {

 @HostBinding('class.open') open1  = false;
 @HostListener('mouseenter') openit(){
 this.open1=true;
 } 
  @HostListener('mouseleave') closeit(){
  this.open1=false;
 }
 

  
 constructor() { }
}
