export class LogService {
private items:string[]=[];
  constructor() { }
  storedata(val:string){
  	this.items.push(val);
  }
  logdata(){
  	return this.items;
  }

}
