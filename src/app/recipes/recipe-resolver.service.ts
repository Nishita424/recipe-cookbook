import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { Recipe } from '../recipes/recipe.model';

import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({ providedIn: 'root' })
export class RecipeResolverService implements Resolve<Recipe[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService
  ) {}

  resolve(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const existingRecipes = this.recipeService.getRecipes();
    if (existingRecipes.length < 1) {
      return this.dataStorageService.fetchRecipes();
    } else {
      return existingRecipes;
    }
  }
}
