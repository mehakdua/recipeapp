import { Component } from '@angular/core';
import {HeaderComponent} from './header.component';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {DirectiveListComponent} from './directive-list/directive-list.component';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'rb works!';
}
