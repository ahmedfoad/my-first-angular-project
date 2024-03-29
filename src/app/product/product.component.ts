import { Component, Input, OnInit } from '@angular/core';

import { interval, takeWhile } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() productName: string | undefined;
  constructor() {}
  ngOnInit(): void {}
  addProduct() {}
}
