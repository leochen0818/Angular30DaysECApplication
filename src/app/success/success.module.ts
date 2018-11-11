import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuccessRoutingModule } from './success-routing.module';
import { SuccessComponent } from './success.component';

@NgModule({
  imports: [
    CommonModule,
    SuccessRoutingModule
  ],
  declarations: [SuccessComponent]
})
export class SuccessModule { }
