import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HeaderComponent } from './header/header.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ListUserComponent } from './list-user/list-user.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MainProductComponent } from './main-product/main-product.component';
import { MainProviderComponent } from './main-provider/main-provider.component';
import { MainUserComponent } from './main-user/main-user.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { FormUserComponent } from './form-user/form-user.component';
import { AddProductTDComponent } from './add-product-td/add-product-td.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    HeaderComponent,
    ErrorPageComponent,
    FooterComponent,
    HomeComponent,
    MainProductComponent,
    MainProviderComponent,
    MainUserComponent,
    MainInvoiceComponent,
    InvoiceListComponent,
    InvoiceComponent,
    UpdateUserComponent,
    FormUserComponent,
    AddProductTDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
