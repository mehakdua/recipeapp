import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  getDetails(recipe:Recipe){
   console.log("gg");
  }
}
