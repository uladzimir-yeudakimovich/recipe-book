import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
	private recipes: Recipe[] = [
		new Recipe(
      'A Tast Recipe', 
      'This is simply a test', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4vNSX33DN6WXK1GDhrmIbTLrgEg8jbJI3wzgWLBTurMqYnKA6', 
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Another Tast Recipe', 
      'This is simply a test', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4vNSX33DN6WXK1GDhrmIbTLrgEg8jbJI3wzgWLBTurMqYnKA6', 
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
	];

	getRecipes() {
		return this.recipes.slice();
	}

}