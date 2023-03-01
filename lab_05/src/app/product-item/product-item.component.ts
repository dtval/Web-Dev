import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: any;
  @Output() likeUpdate = new EventEmitter<number>();
  @Output() deleteUpdate = new EventEmitter();

  clicked: boolean = false;

  didLike(): void {
    if (this.clicked === true) {
      this.product.likes--;
      this.likeUpdate.emit(this.product.likes);
      this.clicked = false;
    } else {
      this.product.likes++;
      this.likeUpdate.emit(this.product.likes);
      this.clicked = true;
    }
  }

  didDelete(): void {
    this.deleteUpdate.emit(this.product.id);
  }
}
