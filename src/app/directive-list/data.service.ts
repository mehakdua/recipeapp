export class DataService {
private items:string[] = [];	
  constructor() { }

   storeData(item:string){
   this.items.push(item);
   }
   getData(){
   return this.items;
   }

}
