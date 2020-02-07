import {Button} from '../button/button.model';
import { Options } from '../option';
export class NumberButton extends Button{
  constructor(public id:number, public value:string, public options:Options){
    super(id,value,options);
  }
}
