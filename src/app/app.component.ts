import { Component } from '@angular/core';
import {HeaderComponent} from './header.component';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import { LogService} from './directive-list/log.service';
import { ShoppingListService} from './shopping-list/shopping-list.service';
import {DirectiveListComponent} from './directive-list/directive-list.component';
import {OtherComponent} from './directive-list/other.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  providers:[LogService,ShoppingListService]
})
export class AppComponent {
  title = 'rb works!';
  value=20;
}
