import {Routes,RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShoppingListComponent} from './shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list-add.component';
import { ShoppingRouterModule } from './shopping.router';
@NgModule({
	imports:[
	CommonModule,
		ShoppingRouterModule
	],
	declarations:[
		ShoppingListComponent,
		ShoppingListAddComponent
	]
})
export class ShoppingModule{}