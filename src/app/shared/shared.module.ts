import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {
  HeaderComponent,
  ModalComponent,
  OSMComponent
} from './components';

const ENTRY_COMPONENTS = [
  ModalComponent
];
const COMPONENTS = [
  HeaderComponent,
  ModalComponent,
  OSMComponent
];
const MODULES = [
  CommonModule,
  IonicModule
];

const PROVIDERS = [];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...MODULES
  ],
  exports: [
    ...COMPONENTS,
    ...MODULES
  ],
  entryComponents: [...ENTRY_COMPONENTS]
})
export class SharedModule { }
