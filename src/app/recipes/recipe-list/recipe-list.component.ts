import { Component,Input,EventEmitter,Output } from '@angular/core';
import {Recipe} from '../recipe';
import {RecipeItemComponent} from './recipe-item.component';
@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {
	recipes:Recipe[]=[];
	recipe=new Recipe("Allo tikki","Snacks","../../../assets/Aloo-Tikki.jpg");
	@Output() selectedRecipe = new EventEmitter();
    constructor() { }
    onSelected(recipe:Recipe){
    console.log(recipe.name);
    		this.selectedRecipe.emit(recipe);
    }
  
}
