import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerInfoRoutingModule } from './customer-info-routing.module';
import { CustomerInfoComponent } from './customer-info.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerInfoRoutingModule
  ],
  declarations: [CustomerInfoComponent]
})
export class CustomerInfoModule { }
