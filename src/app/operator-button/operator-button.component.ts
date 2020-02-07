import { Component, OnInit,Input } from '@angular/core';
import {ButtonComponent} from '../button/button.component';
import {OperatorButton} from './operator-button.model';
import { Options } from '../option';
@Component({
  selector: 'app-operator-button',
  templateUrl: './operator-button.component.html',
  styleUrls: ['./operator-button.component.css']
})
export class OperatorButtonComponent extends ButtonComponent implements OnInit {
  @Input() opId: number;
  @Input() value: string;
  operatorButton: OperatorButton;
  isResult=false;

  constructor() {
    super();
    this.operatorButton = new OperatorButton(this.opId,this.value,this.options);

   }
  ngOnInit() {
   if(this.value == '=')
      {
        this.isResult = true;
      }
      else
      {
        this.isResult = false;
      }
  }
}
