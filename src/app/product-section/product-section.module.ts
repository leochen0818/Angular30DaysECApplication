import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductSectionRoutingModule } from './product-section-routing.module';
import { ProductSectionComponent } from './product-section.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [
    CommonModule,
    ProductSectionRoutingModule
  ],
  declarations: [ProductSectionComponent, ProductListComponent]
})
export class ProductSectionModule { }
