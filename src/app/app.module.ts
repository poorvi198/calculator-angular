import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { DisplayComponent } from './display/display.component';
import { ButtonComponent } from './button/button.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NumberButtonComponent } from './number-button/number-button.component';
import { OperatorButtonComponent } from './operator-button/operator-button.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    ButtonComponent,
    CalculatorComponent,
    NumberButtonComponent,
    OperatorButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
