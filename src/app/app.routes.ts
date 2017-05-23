import {Routes,RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
const approutes:Routes = [
{path:'',redirectTo:'recipes',pathMatch:'full'}
]
@NgModule({
	imports:[
	RouterModule.forRoot(approutes)
	],
	exports:[
	RouterModule
	]
})
export class AppRoutingModule{}