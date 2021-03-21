import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appDetterDynamicHeigthDirective]'
})
export class DetterDynamicHeigthDirectiveDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input() highlatedColor: string = 'blue';
    
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue')
  }

  @HostListener('mouseenter') mouseover(evenrData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
    // this.backgroundColor='blue'
    this.backgroundColor = this.highlatedColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }
}
