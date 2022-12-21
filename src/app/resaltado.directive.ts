import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private element:ElementRef) {
    this.element.nativeElement.style.fontSize = '20px',
    this.element.nativeElement.style.color = 'rgba(0,0,0,0.7)'
   }

}
