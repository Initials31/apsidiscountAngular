import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectiveListe]'
})
export class DirectiveListeDirective {

  private _stock : string;
  

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor='black';
   }

   get stock(): string {
    return this._stock;
  }

   @Input('appDirectiveListe') set stock(value: string) {
    this._stock = value;
    if (parseInt(this._stock)<=5) {
    this.el.nativeElement.style.backgroundColor='orange';
    }
    if (parseInt(this._stock)===0) {this.el.nativeElement.style.backgroundColor='red'}

    else if (parseInt(this._stock)>5) {this.el.nativeElement.style.backgroundColor='green'}
  }
}

