import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDynamicHeigthDirective]'
})
export class DynamicHeigthDirectiveDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor='red'
  }
}
