import { Component, OnInit } from '@angular/core';
import { HighlightDirective} from './highlight.directive';
import { OtherhighlightDirective} from './otherhighlight.directive';
import { LogService} from './log.service';

@Component({
  selector: 'rb-directive-list',
  templateUrl: './directive-list.component.html',
  styleUrls:['./directive-list.component.css'],
  providers:[LogService ]
})
export class DirectiveListComponent implements OnInit {
	items:string[]=[];
  constructor(private logService:LogService, private dataService : DataService) { }

  ngOnInit() {
  }
  logData(){
  this.items = this.logService.logdata();
  }
  storeData(value:string){
  		this.logService.storedata(value);
  }
  onLog(val:string){
  this.logService.setVal(val);
  }
  onStore(val:string){
  this.dataService.storeData(val);
  }
  onRefresh(){
  this.items = this.dataService.getData().slice(0);
  }
}
