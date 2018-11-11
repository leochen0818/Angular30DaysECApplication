import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentInfoRoutingModule } from './payment-info-routing.module';
import { PaymentInfoComponent } from './payment-info.component';

@NgModule({
  imports: [
    CommonModule,
    PaymentInfoRoutingModule
  ],
  declarations: [PaymentInfoComponent]
})
export class PaymentInfoModule { }
