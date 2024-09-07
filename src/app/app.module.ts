import { isDevMode, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './store/app.state';
import { EffectsModule } from '@ngrx/effects';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { AuthEffects } from './auth/state/auth.effects';
import { AuthTokenInterceptor } from './services/AuthToken.interceptor';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EffectsModule.forRoot([AuthEffects]) , 
    ReactiveFormsModule,
    StoreModule.forRoot(appReducer),
    AppRoutingModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      logOnly: !isDevMode(),
    }),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass:AuthTokenInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
