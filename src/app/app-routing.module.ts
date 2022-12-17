import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { ListUserComponent } from './list-user/list-user.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { MainProductComponent } from './main-product/main-product.component';
import { MainProviderComponent } from './main-provider/main-provider.component';
import { MainUserComponent } from './main-user/main-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: 'MainUser', component: MainUserComponent},
  {path: 'product', component: MainProductComponent},
  {path: 'provider', component: MainProviderComponent},
  {path: 'MainInvoice', component: MainInvoiceComponent},
  {path: 'MainInvoice/invoice', component: InvoiceListComponent},
  {path: 'MainInvoice/invoice/:id/:active', component: InvoiceListComponent},
  {path: 'home', component: HomeComponent},
  {path: 'updateUser/:category', component: UpdateUserComponent},
  {path: 'users', component: ListUserComponent},
  {path: 'MainUser/category/:category', component: MainUserComponent},
  {path: 'error-page', component: ErrorPageComponent},
  {path: '**', redirectTo: 'error-page'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}