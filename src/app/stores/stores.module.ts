import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoresRoutingModule } from './stores-routing.module';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductsComponent } from './pages/products/products.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { StoresComponent } from './pages/stores/stores.component';
import { PrimeComponentsModule } from '../prime-components/prime-components.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    CategoriesComponent,
    ProductsComponent,
    OrdersComponent,
    StoresComponent,

  ],
  imports: [
    CommonModule,
    PrimeComponentsModule,
    HttpClientModule,
    StoresRoutingModule,
    FormsModule,
    BrowserModule,
    NoopAnimationsModule,

  ]
})
export class StoresModule { }
