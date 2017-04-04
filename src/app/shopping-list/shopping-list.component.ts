import { Component, OnInit } from '@angular/core';
import {ShoppingListAddComponent} from './shopping-list-add.component';
import {Ingredient} from '../ingredient';
import {ShoppingListService} from './shopping-list.service';
@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
   items:Ingredient[] = [];	
  constructor(private shoppingListService:ShoppingListService) { }
  ngOnInit() {
    this.items = this.shoppingListService.getitems();
  }
  getIngredients(){
  
  }

}
