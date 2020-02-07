import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Display} from './display.model';
import { Options } from '../option';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() dispId: number;
  display: Display;
  @Input() value:string;
  options = new Options();
  @Output() keyPress = new EventEmitter();

  constructor() {
    this.display  = new Display(this.dispId,this.options);
    this.options.className="display";
  }
  keyPressHandler(event){
    this.keyPress.emit(event);
  }
  ngOnInit() {
  }

}
