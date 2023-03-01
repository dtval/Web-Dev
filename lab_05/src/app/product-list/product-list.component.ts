import { Component } from '@angular/core';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];
  categories: string[] = this.getCategories();
  cur_category: string = 'Все';

  share(link: string) {
    document.location.href = link;
  }

  onNotify() {
    alert("notify");
  }

  getCategories(): string[] {
    const list = new Set<string>();
    list.add('Все');
    products.forEach((item) => list.add(item.category));
    return Array.from(list);
  }

  selectCategory(cat: string): any {
    console.log(cat);
    this.cur_category = cat;
    return this.cur_category !== "Все" ? this.products.filter((item: { category: string }) => item.category === cat) : this.products;
  }

  makeLike(likes: number, product: Product) {
    product.likes = likes;
  }

  makeDelete(product: Product): void {
    const idx = this.products.indexOf(product);
    if (idx !== -1) {
      this.products.splice(idx, 1);
    }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/