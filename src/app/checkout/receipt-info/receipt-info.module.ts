import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceiptInfoRoutingModule } from './receipt-info-routing.module';
import { ReceiptInfoComponent } from './receipt-info.component';

@NgModule({
  imports: [
    CommonModule,
    ReceiptInfoRoutingModule
  ],
  declarations: [ReceiptInfoComponent]
})
export class ReceiptInfoModule { }
