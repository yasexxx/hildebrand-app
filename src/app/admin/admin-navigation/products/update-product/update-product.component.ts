import { map, catchError } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { of, pipe } from 'rxjs';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  num = [1,2,3];
  hello:any[];
  constructor() { }

  ngOnInit(): void {
  }

  example() {
    const obs$ = ajax.getJSON(`https://api.github.com/users?per_page=5`).pipe(
  map(userResponse => console.log(userResponse)),
  catchError(error => {
    console.log('error: ', error);
    return of(error);
  })
);
  return obs$;
  }

  getHttp(name){
    name.subscribe(
      x => console.log(x)
    )
  }


}
