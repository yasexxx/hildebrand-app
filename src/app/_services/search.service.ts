import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    _apiUrlSearch: string;
    // searchArrayService = [];

    private searchKeyword = new BehaviorSubject<string>('');
    private searchArrayAlt = new BehaviorSubject<any[]>([]);

    searchKeyword$ = this.searchKeyword.asObservable();
    searchArrayAlt$ = this.searchArrayAlt.asObservable();

    constructor(private http: HttpClient,
                @Inject('BASE_URL') baseUrl: string){
                    this._apiUrlSearch = baseUrl+'/api/v1/en-PH/products';
                }

    getSearchResult(): Observable<any> {
        return this.http.get(this._apiUrlSearch);
    }

    changeKeyword(str){
        this.searchKeyword.next(str);
    }

    changeArray(obj){
        this.searchArrayAlt.next(obj);
    }




}