import { Component, OnInit ,Input, EventEmitter, Output} from '@angular/core';

import { Recipe } from '../../recipe.model';

import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  recipes:Recipe[];

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
      this.recipes = this.recipeService.getRecipe();
  }

  selectedItem(selectedItemRecipe:Recipe){
    this.recipeService.onSelectedRecipe.emit(selectedItemRecipe);
    console.log(selectedItemRecipe);
  }



}
