import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'countFilterArray'})
export class FilterArrayPipe implements PipeTransform {
    transform(items: any[], searchText: string): number {
        if (!items) {
          return 0;
        }
        if (!searchText) {
          return 0;
        }
        searchText = searchText.toLocaleLowerCase();
    
        const newItem = items.filter((it) => {
          return it.productName.toLocaleLowerCase().includes(searchText)||
          it.description.toLocaleLowerCase().includes(searchText) ||
          it.category.toLocaleLowerCase().includes(searchText) ||
          it.id.toLocaleLowerCase().includes(searchText) ||
          it.price.toString().includes(searchText)

        });

        return newItem.length;
      }
}