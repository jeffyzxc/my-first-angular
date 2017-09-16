import { Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector:'[appDropdown]'
})

export class DropDownDirective {

  @HostBinding('class.open') dropdown = false;

  @HostListener('click') toggleDropdown(){
    this.dropdown = !this.dropdown;
  }

  @HostListener('mouseleave') close(){
    this.dropdown = false;
  }

  
}
