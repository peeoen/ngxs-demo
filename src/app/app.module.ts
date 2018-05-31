import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { AuthState } from './auth/auth.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxsModule.forRoot([
      AuthState
    ]),
    NgxsStoragePluginModule.forRoot({
      key: 'auth.token'
    }),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
