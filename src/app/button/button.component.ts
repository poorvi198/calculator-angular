import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Button} from './button.model';
import { Options } from '../option';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  button: Button;
  id: number;
  value: string;
  options=new Options();
  @Output() ButtonClicked = new EventEmitter();
  constructor() {
    this.button = new Button(this.id,this.value,this.options);
    this.options.className='btn';
  }
  clickHandler(event){
    this.ButtonClicked.emit(event);
  }
  ngOnInit() {
  }

}
