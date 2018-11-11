import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';

@NgModule({
  imports: [
    CommonModule,
    ProductListRoutingModule
  ],
  declarations: [ProductListComponent]
})
export class ProductListModule { }
