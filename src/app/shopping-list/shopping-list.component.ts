import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor() {}

  ngOnInit(): void {
    this.ingredients = [
      new Ingredient('Morvaldio', 5),
      new Ingredient('Taurian', 10),
    ];
  }

  addToList(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
