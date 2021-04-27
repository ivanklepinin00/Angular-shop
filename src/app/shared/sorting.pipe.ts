import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './interface';

@Pipe({
  name: 'sorting',
})
export class SortingPipe implements PipeTransform {
  transform(products: Product[], type = ''): any {
    return products.filter((product) => {
      return product.type == type;
    });
  }
}
