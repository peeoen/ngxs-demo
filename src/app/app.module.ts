import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app.component';
import { FoodsState } from './food/food.state';
import { RouteHandler } from './hanlder.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      FoodsState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [
    RouteHandler,
    {
      provide: APP_INITIALIZER,
      useFactory: noop,
      deps: [RouteHandler],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function noop() { return function() {}; }
