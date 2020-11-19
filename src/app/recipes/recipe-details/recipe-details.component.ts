import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import {RecipeService} from '../recipe.service'

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  @Input() targetRecipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}
  
  onAddToShoppingList(){
    this.recipeService.addToShoppingList(this.targetRecipe.ingredients);
  }
}
