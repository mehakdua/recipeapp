import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesStartComponent } from './recipes-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
const recipeRoutes:Routes = [
	{
	path:'recipes',component:RecipesComponent,
		children:[
			{path:'',component:RecipesStartComponent},
			{path:':id',component:RecipeDetailComponent},
			{path:':id/edit',component:RecipeEditComponent}
		]
	}
]
@NgModule({
	imports:[
	RouterModule.forChild(recipeRoutes)
	],
	exports:[
	RouterModule
	]
})
export class RecipeRouterModule{}

