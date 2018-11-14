import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { ProductItemModule } from '../shared/product-item/product-item.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProductItemModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
