import { Options } from '../option';

export class Calculator{
 public numbers: string[]=['1','2','3','4','5','6','7','8','9','0','00','.'];
 public operators: string[]=['/','x','-','+'];
 public others : string[]=['c','ce','<-','='];
 public id:number;
 public options:Options;
 constructor(id:number,options:Options){
   this.id=id;
   this.options=options;
 }

}
