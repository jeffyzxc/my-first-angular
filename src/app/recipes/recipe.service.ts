import { EventEmitter } from '@angular/core';

import { Recipe } from "./recipe.model";

import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

  onSelectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [new Recipe('Beef'
                      ,'Tender beef'
                      ,'https://get.pxhere.com/photo/dish-food-recipe-meat-beef-steak-roasting-cutlet-fried-food-animal-source-foods-lamb-and-mutton-meat-chop-short-ribs-1375819.jpg'
                      ,[
                       new Ingredient("Carrots",20),
                       new Ingredient("Carrots",20)
                       ])
                    ,
                    new Recipe('Chicken Adobo'
                      ,'Saucey adobo'
                      ,'https://get.pxhere.com/photo/dish-food-recipe-meat-beef-steak-roasting-cutlet-fried-food-animal-source-foods-lamb-and-mutton-meat-chop-short-ribs-1375819.jpg',
                      [new Ingredient("Carrots",20),
                       new Ingredient("Carrots",20)])
                    ];


   getRecipe(){
     return this.recipes.slice();
   }



}
