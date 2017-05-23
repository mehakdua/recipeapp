import { Component,OnInit,Input,EventEmitter,Output } from '@angular/core';
import {Recipe} from '../recipe';
import {Router} from '@angular/router';
import {RecipeItemComponent} from './recipe-item.component';
import {RecipeService} from '../recipe.service';
@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {
	recipes:Recipe[] =[];
	/*@Output() selectedRecipe = new EventEmitter<Recipe>();*/
    constructor(private recipeService:RecipeService ,private router:Router) { }
    ngOnInit(){
     this.recipes = this.recipeService.getRecipes();
    }
 /*   onSelected(recipe:Recipe){
    		this.selectedRecipe.emit(recipe);
    }*/
    selectRecipe(i){
    this.router.navigate(["/recipes",i]);
   }
}
