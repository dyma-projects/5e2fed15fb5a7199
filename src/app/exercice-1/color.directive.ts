import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @HostBinding("style.color") public color: string;

  @HostListener('window:keyup.arrowup', ['$event']) arrowUp($event) {
    this.color = "red";
  }
  @HostListener('window:keyup.arrowleft', ['$event']) arrowLeft($event) {
    this.color = "blue";
  }
  @HostListener('window:keyup.arrowdown', ['$event']) arrowDown($event) {
    this.color = "green";
  }
  @HostListener('window:keyup.arrowright', ['$event']) arrowRight($event) {
    this.color = "purple";
  }

  constructor() { }

}
