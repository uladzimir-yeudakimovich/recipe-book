import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipesServise: RecipeService) {}

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-84c52.firebaseio.com/recipes.json', this.recipesServise.getRecipes());
  }

  getRecipes() {
    return this.http.get('https://ng-recipe-book-84c52.firebaseio.com/recipes.json')
      .subscribe(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          this.recipesServise.setRecipes(recipes);
        }
      );
  }

}