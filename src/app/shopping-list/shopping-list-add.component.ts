import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../ingredient';
@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnInit {
  items:Ingredient[] = [];
  constructor() { }

  ngOnInit() {
  }

}
