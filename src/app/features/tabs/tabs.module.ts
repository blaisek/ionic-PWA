import { NgModule } from '@angular/core';

import { TabsRoutingModule } from './tabs-routing.module';
import { TestPageComponent } from './containers/test-page/test-page.component';
import { TabOneComponent } from './containers/tab-one/tab-one.component';
import { TabTwoComponent } from './containers/tab-two/tab-two.component';
import { TabThreeComponent } from './containers/tab-three/tab-three.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    TestPageComponent,
    TabOneComponent,
    TabTwoComponent,
    TabThreeComponent
  ],
  imports: [
    SharedModule,
    TabsRoutingModule
  ],
  // providers: [
  //   HttpService
  // ]
})
export class TabsModule { }
