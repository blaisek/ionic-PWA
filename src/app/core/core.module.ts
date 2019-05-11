import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './services/token-interceptor/token-interceptor.service';
import { UpdatesNotificationComponent } from './components';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

const COMPONENTS = [
  UpdatesNotificationComponent
];
@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  exports: [
    ...COMPONENTS,
    HttpClientModule
  ]
})
export class CoreModule { }
