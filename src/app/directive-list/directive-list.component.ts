import { Component, OnInit } from '@angular/core';
import { HighlightDirective} from './highlight.directive';
import { OtherhighlightDirective} from './otherhighlight.directive';
import { LogService} from './log.service';
@Component({
  selector: 'rb-directive-list',
  templateUrl: './directive-list.component.html',
  styleUrls:['./directive-list.component.css']
})
export class DirectiveListComponent implements OnInit {
	private items:string[]=[];
  constructor(private logService:LogService) { }

  ngOnInit() {
  }
  logData(){
  this.items = this.logService.logdata();
  }
  storeData(value:string){
  		this.logService.storedata(value);
  }

}
