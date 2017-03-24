import { Component, OnInit } from '@angular/core';
import { HighlightDirective} from './highlight.directive';
@Component({
  selector: 'rb-directive-list',
  templateUrl: './directive-list.component.html',
  styleUrls:['./directive-list.component.css']
})
export class DirectiveListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
