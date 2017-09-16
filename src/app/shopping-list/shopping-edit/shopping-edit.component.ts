import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name') nameInput: ElementRef;
  @ViewChild('amount') amountInput: ElementRef;
  //@Output('addIngredient') addIngredient = new EventEmitter<Ingredient>();

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    
  }

  ingredientAdded(){
    this.shoppingListService.addIngredients(new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value));
  }



}
