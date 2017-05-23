import {Routes,RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeRouterModule } from './recipe.router';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesStartComponent } from './recipes-start.component';
import {RecipeService} from './recipe.service';
@NgModule({
	imports:[
	CommonModule,
	 RecipeRouterModule
	],
	declarations:[
	 RecipesComponent,
	 RecipeListComponent,
	 RecipeItemComponent,
	 RecipeDetailComponent,
	 RecipeEditComponent,
	 RecipesStartComponent
	],
 	 providers: [RecipeService]
})
export class RecipeModule{}