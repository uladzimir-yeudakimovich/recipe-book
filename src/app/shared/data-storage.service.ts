import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, 
              private recipesServise: RecipeService,
              private authService: AuthService) {}

  storeRecipes() {
    // const headers = new HttpHeaders().set('Authorization', 'Bearer afdjdsfjd');
    // return this.httpClient.put('https://ng-recipe-book-84c52.firebaseio.com/recipes.json', this.recipesServise.getRecipes(), {
    //   observe: 'body',
    //   params: new HttpParams().set('auth', token)
    //   // headers: headers
    // });
    const req = new HttpRequest('PUT', 'https://ng-recipe-book-84c52.firebaseio.com/recipes.json', this.recipesServise.getRecipes(), {reportProgress: true});
    return this.httpClient.request(req);
  }

  getRecipes() {
    // return this.httpClient.get<Recipe[]>('https://ng-recipe-book-84c52.firebaseio.com/recipes.json?auth=' + token)
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