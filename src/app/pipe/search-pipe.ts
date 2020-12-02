import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'searchFilterCustom'})
export class CustomSearchFilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if (!items) {
          return [];
        }
        if (!searchText) {
          return items;
        }
        searchText = searchText.toLocaleLowerCase();
    
        return items.filter((it) => {
        return  it.productName.toLocaleLowerCase().includes(searchText)||
                it.description.toLocaleLowerCase().includes(searchText) ||
                it.category.toLocaleLowerCase().includes(searchText) ||
                it.id.toLocaleLowerCase().includes(searchText) ||
                it.price.toString().includes(searchText)

        });
      }
}