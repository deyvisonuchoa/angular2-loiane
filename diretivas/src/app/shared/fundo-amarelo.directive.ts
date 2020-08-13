import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[FundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private elementRef: ElementRef, private _renderer: Renderer2) { 
    //console.log(elementRef.nativeElement.style);
    //this.elementRef.nativeElement.style.backgroudColor = 'yellow';
    this._renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }
  

}
 