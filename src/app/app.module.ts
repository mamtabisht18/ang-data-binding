import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBinDingComponent } from './two-way-bin-ding/two-way-bin-ding.component';
import { OneWayComponent } from './one-way/one-way.component';

@NgModule({
  declarations: [
    AppComponent,
    EventBindingComponent,
    TwoWayBinDingComponent,
    OneWayComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { 
  
}
