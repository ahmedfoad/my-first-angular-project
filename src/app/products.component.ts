import { Component } from '@angular/core';

import { interval, takeWhile } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {

  productName =  'product 1';

  products = ['A', 'B'];
  constructor() {

  }

  addProduct() {
    debugger;
    this.products.push(this.productName);
    this.productName = '';
    }

  //   countdown: number = 0;
  //   showDownloadLink: boolean = false;

  //   startCountdown() {
  //   debugger;
  //   this.countdown = 0;
  //   this.showDownloadLink = false;
  //   interval(1000)
  //     .pipe(takeWhile(() => this.countdown < 10))
  //     .subscribe(() => {
  //       this.countdown++;
  //       if (this.countdown === 9) {
  //         this.showDownloadLink = true;
  //       }
  //     });
  // }


}
