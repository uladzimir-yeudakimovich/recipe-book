import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  
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
  
  constructor() { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

	getRecipes() {
		return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updataRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}