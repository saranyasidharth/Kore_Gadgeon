import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgileComponent } from './agile/agile.component';
import { IotComponent } from './iot/iot.component';
import { InnovComponent } from './innov/innov.component';
import { DemopipesComponent } from './demopipes/demopipes.component';
import { CustompipesPipe } from './custompipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AgileComponent,
    IotComponent,
    InnovComponent,
    DemopipesComponent,
    CustompipesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
