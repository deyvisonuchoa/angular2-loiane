import { Directive, HostListener,ElementRef, Renderer2 ,HostBinding } from '@angular/core';
import { hostViewClassName } from '@angular/compiler';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color', 'yellow'
      );*/
      //this.setColor('white');
      this.backgroundColor = 'yellow';
  };

  @HostListener('mouseleave') onMouseLeave(){
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color', 'white'
      );*/
     
    //this.backgroundColor = 'white';
    //this.setColor('white');
     this.backgroundColor = 'blue';
  };

  //@HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.backgroundColor') get getColor(){
    return this.backgroundColor;  
  };

  @HostBinding('style.backgroundColor') set setColor(color){
    this.backgroundColor = color;  
  };
  private backgroundColor: string;

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) { }

}
