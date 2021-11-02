import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) {
    this.highlight('yellow');
   }

   @HostListener('mouseenter')
   onMouseEnter(){
    this.highlight('greenyellow');
   }

   @HostListener('mouseleave')
   onMouseLeave(){
    this.highlight('white');
   }

   highlight(color:string){
    this.el.nativeElement.style.backgroundColor=color;
   }
}
