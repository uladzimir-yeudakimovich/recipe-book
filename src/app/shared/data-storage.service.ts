import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, 
              private recipesServise: RecipeService) {}

  storeRecipes() {
    const req = new HttpRequest('PUT', 'https://ng-recipe-book-84c52.firebaseio.com/recipes.json', this.recipesServise.getRecipes(), {reportProgress: true});
    return this.httpClient.request(req);
  }

  getRecipes() {
    return this.httpClient.get<Recipe[]>('https://ng-recipe-book-84c52.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json'
    })
      .map(
        (recipes) => {
          console.log(recipes);
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipesServise.setRecipes(recipes);
        }
      );
  }
}