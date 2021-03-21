import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdownDiective]'
})
export class DropdownDiectiveDirective {
  @HostBinding('class.open') isDropdownOpend = false;
  @HostListener('document:click',['$event']) onClickDropdown(event: Event) {
    // this.isDropdownOpend = !this.isDropdownOpend
    this.isDropdownOpend = this.elRef.nativeElement.contains(event.target) ? !this.isDropdownOpend : false;
  }
  constructor(private elRef:ElementRef) { }

}
