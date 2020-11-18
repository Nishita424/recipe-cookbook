import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is simply a test description',
      'https://images.pexels.com/photos/5200286/pexels-photo-5200286.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    ),
    new Recipe(
      'A test recipe',
      'This is simply a test description',
      'https://images.pexels.com/photos/5200286/pexels-photo-5200286.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
