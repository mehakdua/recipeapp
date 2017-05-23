import { Component, OnInit,Input,OnDestroy } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {Recipe} from '../recipe';
import {Subscription} from 'rxjs/Subscription';
import {RecipeService} from '../recipe.service';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit,OnDestroy {
 //@Input() selectedRecipe:Recipe;
 /*selectedRecipe:Recipe;
	selectedRecipe= [new Recipe("Allo tikki","Snacks","../../../assets/Aloo-Tikki.jpg",[new Ingredient("Meat","1");*/
  
  private id;
  private selectedRecipe:Recipe;
  private subscription: Subscription;
  constructor(private sl:ShoppingListService ,private activatedRoute:ActivatedRoute,private recipeService:RecipeService ,private router:Router ) {
    this.subscription = activatedRoute.params.subscribe(
      (param:any) =>{
      this.id = param['id'],
     this.selectedRecipe = this.recipeService.getRecipes()[this.id];
      } 
    ); 
  }
  
  ngOnInit() {
  }
  addToShoppingList(ing){
  	this.sl.additems(ing);
  }
  editRecipe(){
    this.router.navigate(["recipes",this.id,"edit"]);
  }
  deleteRecipe(){
     this.recipeService.deleteRecipe(this.id);
      this.router.navigate(["recipes"]);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
