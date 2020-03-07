import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
  recipes: State
}

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [
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
  ]
};

export function recipeReducer (state = initialState, action: RecipeActions.RecipeActions) {
  switch(action.type) {
    case (RecipeActions.SET_RECIPES):
      return {
        ...state,
        recipes: [...action.payload]
      };
    case (RecipeActions.ADD_RECIPES):
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case (RecipeActions.UPDATE_RECIPES):
      const recipe = state.recipes[action.payload.index];
      const updatedRecipe = {
        ...recipe,
        ...action.payload.updatedRecipe
      };
      const recipes = [...state.recipes];
      recipes[action.payload.index] = updatedRecipe;
      return {
        ...state,
        recipes: recipes
      };
    case (RecipeActions.DELETE_RECIPES):
      const oldRecipes = [...state.recipes];
      oldRecipes.slice(action.payload, 1);
      return {
        ...state,
        recipes: oldRecipes
      };
    default:
      return state;
  }
}
