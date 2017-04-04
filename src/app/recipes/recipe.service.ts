import {Recipe} from './recipe';
import {Ingredient} from '../Ingredient';
export class RecipeService {
recipes:Recipe[]= [new Recipe("Allo tikki","Snacks","../../../assets/Aloo-Tikki.jpg",[new Ingredient("Meat","1")
,new Ingredient("Bacon","1")]),
  new Recipe("Noodles","Snacks","../../../assets/Noodles.jpg",[new Ingredient("Chicken","1")
,new Ingredient("Cloves","1")])];
	getRecipes(){
		return this.recipes;
	}  

}
