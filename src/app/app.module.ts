import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app.component';
import { FoodsState } from './food/food.state';
import { AppRoutingModule } from './app-routing.module';
import { FoodComponent } from './food/food.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      FoodsState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
