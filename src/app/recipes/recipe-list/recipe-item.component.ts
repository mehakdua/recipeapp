import { Component, OnInit,Input } from '@angular/core';
import {Recipe} from '../recipe';
import {Router} from '@angular/router';
@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent{
@Input() recipe:Recipe;
constructor(private router:Router) { }
selectRecipe(i){
    this.router.navigate(["/recipes",i]);
   }
 
}
