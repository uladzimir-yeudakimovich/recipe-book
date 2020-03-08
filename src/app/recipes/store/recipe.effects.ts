import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';

import * as RecipeActions from './recipe.actions';
import { Recipe } from '../recipe.model';

@Injectable()
export class RecipeEffects {
  @Effect()
  recipeFetch = this.actions$.pipe(
    ofType(RecipeActions.FETCH_RECIPES),
    switchMap((actions: RecipeActions.FetchRecipes) => {
      return this.httpClient.get<Recipe[]>('https://ng-recipe-book-84c52.firebaseio.com/recipes.json', {
        observe: 'body',
        responseType: 'json'
      });
    }),
    map(
      (recipes) => {
        console.log(recipes);
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return {
          type: RecipeActions.SET_RECIPES,
          payload: recipes
        }
      }
    )
  );

  constructor(private actions$: Actions, private httpClient: HttpClient) {}
}