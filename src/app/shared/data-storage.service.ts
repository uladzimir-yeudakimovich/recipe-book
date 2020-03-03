import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipesServise: RecipeService) {}

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-84c52.firebaseio.com/recipes.json', this.recipesServise.getRecipes());
  }
}