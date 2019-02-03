import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestARidePage } from './request-a-ride';

@NgModule({
  declarations: [
    RequestARidePage,
  ],
  imports: [
    IonicPageModule.forChild(RequestARidePage),
  ],
})
export class RequestARidePageModule {}
