import { ActivatedRoute, Params, Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  // @Input() targetRecipe: Recipe;
  targetRecipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Not apt
    // const id = this.route.snapshot.params['id'];

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']; // casting string id from route to number
      this.targetRecipe = this.recipeService.getRecipe(this.id);
    });
  }

  onAddToShoppingList() {
    this.recipeService.addToShoppingList(this.targetRecipe.ingredients);
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.recipeService.removeFromShoppingList(this.targetRecipe.ingredients);

    this.router.navigate(['/recipes']);
  }
}
