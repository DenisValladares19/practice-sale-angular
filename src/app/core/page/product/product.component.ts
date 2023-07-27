import { Component, OnInit } from '@angular/core';
import { ProductDTO } from 'src/app/interfaces/Product.model';
import { methodEnum } from 'src/app/interfaces/Request.model';
import { ApiService } from 'src/app/services/api.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'dv-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public listProduct: ProductDTO[] = [];

  constructor(
    private api: ApiService<ProductDTO[]>,
    private loading: LoadingService
    ) {}

  ngOnInit() {
    this.loading.show();
    this.api.fetch({ url: "/product", method: methodEnum.GET }).subscribe((res) => {
      this.listProduct = res.content || [];
      this.loading.hidden();
    }, (err) => {
      this.loading.hidden();
    })
  }


}
