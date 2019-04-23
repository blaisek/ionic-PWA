import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestPageComponent } from './containers/test-page/test-page.component';
import { TabOneComponent } from './containers/tab-one/tab-one.component';
import { TabTwoComponent } from './containers/tab-two/tab-two.component';
import { TabThreeComponent } from './containers/tab-three/tab-three.component';

const routes: Routes = [
  {
    path: '',
    component: TestPageComponent,
    children: [
      {
        path: 'tabone',
        component: TabOneComponent
      },
      {
        path: 'tabtwo',
        component: TabTwoComponent
      },
      {
        path: 'tabthree',
        component: TabThreeComponent
      },
      {
        path: '',
        redirectTo: 'tabone',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
