import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeliveryStatusPage } from './delivery-status';

@NgModule({
  declarations: [
    DeliveryStatusPage,
  ],
  imports: [
    IonicPageModule.forChild(DeliveryStatusPage),
  ],
})
export class DeliveryStatusPageModule {}
