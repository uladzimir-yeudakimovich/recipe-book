import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListServise } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  
	private recipes: Recipe[] = [
		new Recipe(
      'Tasty Schnitzel', 
      'A super-tasty Schnitzel - just awesome!', 
      'https://www.weightwatchers.co.uk/images/2057/dynamic/foodandrecipes/2013/10/SteakChipsMustardMayo_xl.jpg', 
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Big Fat Burger', 
      'What else you need to say?', 
      'https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-4-500x500.jpg', 
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];
  
  constructor(private slService: ShoppingListServise) { }

	getRecipes() {
		return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
  
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}