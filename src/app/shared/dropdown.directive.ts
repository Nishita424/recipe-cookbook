import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  // HostBinding sets the class-open to the element this directive is applied on.
  @HostBinding('class.open') isOpen = false;

  constructor() {}

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
