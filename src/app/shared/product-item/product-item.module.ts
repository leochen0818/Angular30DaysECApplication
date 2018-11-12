import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductItemComponent],
  exports: [ProductItemComponent]
})
export class ProductItemModule { }
