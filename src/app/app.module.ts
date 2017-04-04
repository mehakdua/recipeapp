import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { DataService} from './directive-list/data.service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { DirectiveListComponent } from './directive-list/directive-list.component';
import { HighlightDirective } from './directive-list/highlight.directive';
import { UnlessDirective } from './directive-list/unless.directive';
import { OtherhighlightDirective } from './directive-list/otherhighlight.directive';
import { DropdownDirective } from './dropdown.directive';
import { OtherComponent } from './directive-list/other.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    DirectiveListComponent,
    HighlightDirective,
    UnlessDirective,
    OtherhighlightDirective,
    DropdownDirective,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
