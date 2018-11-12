import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Constant
import { appPath } from '../app-path.const';

// Component
import { CheckoutComponent } from './checkout.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { ReceiptInfoComponent } from './receipt-info/receipt-info.component';

const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
    children: [
      {
        path: '',
        redirectTo: appPath.checkoutFlow.customerInfo,
        pathMatch: 'full'
      },
      {
        path: appPath.checkoutFlow.customerInfo,
        component: CustomerInfoComponent
      },
      {
        path: appPath.checkoutFlow.paymentInfo,
        component: PaymentInfoComponent
      },
      {
        path: appPath.checkoutFlow.receiptInfo,
        component: ReceiptInfoComponent
      },
      {
        path: '**',
        redirectTo: appPath.checkoutFlow.customerInfo,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
