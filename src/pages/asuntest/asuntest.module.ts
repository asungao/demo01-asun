import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AsuntestPage } from './asuntest';

@NgModule({
  declarations: [
    AsuntestPage,
  ],
  imports: [
    IonicPageModule.forChild(AsuntestPage),
  ],
  exports: [
    AsuntestPage
  ]
})
export class AsuntestPageModule {}
