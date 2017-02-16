import { Component, OnInit,Input } from '@angular/core';
import {Recipe} from '../recipe';
import {RecipeItemComponent} from './recipe-item.component';
@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
	recipes:Recipe[]=[];
	recipe=new Recipe("Allo tikki","Snacks","../../../assets/Aloo-Tikki.jpg");
  constructor() { }

  ngOnInit() {
  }

}
