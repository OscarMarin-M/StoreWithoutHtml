import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '../../interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: ``
})
export class ProductsComponent{
/*   selectedProduct!: any;
  public productList: ProductInterface[]=[];
  constructor(private productService: ProductInterface){}

  public ngOnInit(): void {
    console.log("ADIOS MUNDO");
    this.getAllProducts();
    console.log(this.productList);
  }
  getAllProducts(){
    this.productService.getAllProducts().subscribe((response: any)=>{
      this.productList=response;
      console.log(response);
    })
  } */

}
