import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}	from '@angular/forms';
import { AppComponent }  from './app.component';
import { AppemployeeComponent }  from './app.employeeComponent';
@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent, AppemployeeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
