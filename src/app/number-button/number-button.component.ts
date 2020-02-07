import { Component, OnInit, Input } from '@angular/core';
import {ButtonComponent} from '../button/button.component';
import { NumberButton } from './number-button.model';
@Component({
  selector: 'app-number-button',
  templateUrl: './number-button.component.html',
  styleUrls: ['./number-button.component.css']
})
export class NumberButtonComponent extends ButtonComponent implements OnInit {

  @Input() numId: number;
  @Input() value: string;
  numberButton: NumberButton;
  constructor() {
    super();
    this.numberButton = new NumberButton(this.numId,this.value,this.options);
   }

  ngOnInit() {
  }

}
