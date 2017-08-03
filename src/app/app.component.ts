import { Component } from '@angular/core';
import {HeaderComponent} from './header.component';
import { RecipeModule} from './recipes/recipe.module';
import {ShoppingModule} from './shopping-list/shopping.module';
import { LogService} from './directive-list/log.service';

import {DirectiveListComponent} from './directive-list/directive-list.component';
import {OtherComponent} from './directive-list/other.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  providers:[LogService]
})
export class AppComponent {
  title = 'rb works!';
  value=20;
}
