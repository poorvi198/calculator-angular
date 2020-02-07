import { Component, OnInit, Input} from '@angular/core';
import{Calculator} from './calculator.model';
import { DisplayComponent } from '../display/display.component';
import { NumberButtonComponent } from '../number-button/number-button.component';
import { OperatorButtonComponent } from '../operator-button/operator-button.component';
import { Options } from '../option';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  @Input() calcId: number;
  calculator: Calculator;
  numberDiv = "number-div";
  clickedButton: string;
  options = new Options();
  constructor() {
    this.calculator = new Calculator(this.calcId,this.options);
    this.options.className="calculator";
    this.clickedButton = "";
   }

   keyPressHandler(event){
     const code=event.keyCode;
     if((code>=45 && code<=57) || code==43 || code==42){
        this.clickedButton = this.clickedButton+event.key;
     }
     else{
        if(event.key == "=" || event.keyCode == 13)
        {
            this.clickedButton = eval(this.clickedButton);
            this.clickedButton = ""+this.clickedButton;
        }
     }
   }

      onNumberButtonClicked(event){
      this.clickedButton = this.clickedButton+event.target.value;
      }

      onOperatorButtonClicked(event){

      this.clickedButton = this.clickedButton+event.target.value;
      }

      onOtherButtonClicked(event){
        if(event.target.value === 'c'){
        this.clickedButton = '';
        }

        if(event.target.value === 'ce'){
          let tempValue : string=this.clickedButton;
          let index : number = -1;
          for(let i = tempValue.length-1 ; i>=0 ; i--)
          {
              if(isNaN(tempValue.charAt(i) as any))
              {
                  index = i;
                  break;
              }
          }
          this.clickedButton = tempValue.substring(0,index+1);
        }

        if(event.target.value === '<-'){
          let tempValue : string = this.clickedButton;
          tempValue = tempValue.substring(0,tempValue.length-1);
          this.clickedButton = tempValue;
        }

        if(event.target.value ==='='){
          let tempValue=this.clickedButton;
          if(tempValue.includes('x'))
          {
              tempValue = tempValue.replace('x','*');
          }
          this.clickedButton = eval(tempValue);
          this.clickedButton = ""+this.clickedButton;
        }
      }
  ngOnInit(){}

  }
