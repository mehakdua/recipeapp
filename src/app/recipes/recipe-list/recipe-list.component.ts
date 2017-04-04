import { Component,OnInit,Input,EventEmitter,Output } from '@angular/core';
import {Recipe} from '../recipe';
import {RecipeItemComponent} from './recipe-item.component';
import {RecipeService} from '../recipe.service';
@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  providers:[RecipeService]
})
export class RecipeListComponent {
	recipes:Recipe[] =[];
	@Output() selectedRecipe = new EventEmitter<Recipe>();
    constructor(private recipeService:RecipeService ) { }
    ngOnInit(){
     this.recipes = this.recipeService.getRecipes();
    }
    onSelected(recipe:Recipe){
    		this.selectedRecipe.emit(recipe);
    }
}
