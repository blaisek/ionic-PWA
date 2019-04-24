import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './services/token-interceptor/token-interceptor.service';
import {UpdatesNotificationComponent} from './components/updates-notifications/updates-notifications.component';

const COMPONENTS = [
  UpdatesNotificationComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    HttpClientModule,
    CommonModule
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
    HttpClientModule,
  ]
})
export class CoreModule { }
