import { Component, OnInit } from '@angular/core';
import { LogService} from './log.service';
@Component({
  selector: 'rb-other',
  templateUrl: './other.component.html'
})
export class OtherComponent implements OnInit {

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
