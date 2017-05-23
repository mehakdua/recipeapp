import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecipeModule} from './recipes/recipe.module';
import { ShoppingModule } from './shopping-list/shopping.module';
import { AppRoutingModule} from './app.routes';
import { DataService} from './directive-list/data.service';
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
    DirectiveListComponent,
    HighlightDirective,
    UnlessDirective,
    OtherhighlightDirective,
    DropdownDirective,
    OtherComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    RecipeModule,
    ShoppingModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
