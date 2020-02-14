// import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

// @Injectable()
export class RecipeService {
	private recipes: Recipe[] = [
		new Recipe('A Tast Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4vNSX33DN6WXK1GDhrmIbTLrgEg8jbJI3wzgWLBTurMqYnKA6'),
		new Recipe('Another Tast Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4vNSX33DN6WXK1GDhrmIbTLrgEg8jbJI3wzgWLBTurMqYnKA6')
	];

	getRecipes() {
		return this.recipes.slice();
	}

}