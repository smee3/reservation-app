import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-listings/product-listings.component';
import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './productdetail/productdetail.component';

const routes: Routes = [
    {
        path: 'products',
        component: ProductComponent,
        children: [
            { path: '', component: ProductListComponent },
            { path: ':productId', component: ProductDetailComponent },
        ]
    },
    // { path: '', component: ProductListComponent },
    // { path: 'detail', component: ProductDetailComponent },
];

@NgModule({
    declarations: [
        ProductDetailComponent,
        ProductListComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ],
    providers: [],
    bootstrap: []
})
export class ProductModule { }
