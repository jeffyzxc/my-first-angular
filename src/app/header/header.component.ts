import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector:'app-header',
  templateUrl:'./header.component.html',
  styleUrls:['header.component.css']
})

export class HeaderComponent implements OnInit{
  @Output() selectedItem = new EventEmitter<string>();
  
  constructor(){ }

  ngOnInit () {  }

  onSelect(selectedMenu: string){
    this.selectedItem.emit(selectedMenu);
  }

}
