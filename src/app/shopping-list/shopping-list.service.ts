import {Ingredient} from '../ingredient';
export class ShoppingListService {
  private items:Ingredient []=[];
  constructor() { 
  console.log("shopping-service");}
  additems(items:Ingredient[]){
   Array.prototype.push.apply(this.items,items);
  }
  getitems(){
  return this.items;
  }

}
