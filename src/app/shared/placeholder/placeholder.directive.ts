import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPlaceholder]',
})
export class PlaceholderDirective {
  // public, to access viewcontainerref from outside
  constructor(public viewContainerRef: ViewContainerRef) {}
}
