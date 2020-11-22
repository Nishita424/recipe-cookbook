import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';

import { RecipeService } from '../recipes/recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipesService: RecipeService
  ) {}

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    return this.http
      .put(
        'https://ng-recipe-cookbook-app.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  fetchRecipes() {
    this.http
      .get<Recipe[]>(
        'https://ng-recipe-cookbook-app.firebaseio.com/recipes.json'
      )
      // To protect code from errors incase new recipe added do not have ingredients[]
      .pipe(
        // rxjs operator map
        map((recipes) => {
          // Array map
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        })
      )
      .subscribe((recipes) => {
        this.recipesService.setRecipes(recipes);
      });
  }
}
