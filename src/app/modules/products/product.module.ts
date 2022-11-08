import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports: [
    ProductListComponent,
    ProductDetailComponent
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  providers: [
  ],
})
export class ProductModule { }