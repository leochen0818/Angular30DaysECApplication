import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { ReceiptInfoComponent } from './receipt-info/receipt-info.component';

@NgModule({
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ],
  declarations: [
    CheckoutComponent,
    CustomerInfoComponent,
    PaymentInfoComponent,
    ReceiptInfoComponent
  ]
})
export class CheckoutModule { }
