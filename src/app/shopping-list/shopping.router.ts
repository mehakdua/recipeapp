import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ShoppingListComponent} from './shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list-add.component';
const shoppingRoutes:Routes = [
{path:'shopping-list',component:ShoppingListComponent}
]
@NgModule({
	imports:[
		RouterModule.forChild(shoppingRoutes)
	],
	exports:[
		RouterModule
	]
})
export class ShoppingRouterModule{}