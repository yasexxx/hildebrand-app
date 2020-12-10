import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    _apiUrlSearch: string;
    networkValidation = false;
    // private networkValidation = new BehaviorSubject<boolean>(false);
    private searchKeyword = new BehaviorSubject<string>('');
    private searchArrayAlt = new BehaviorSubject<any[]>([]);

    searchKeyword$ = this.searchKeyword.asObservable();
    searchArrayAlt$ = this.searchArrayAlt.asObservable();
    // networkValidation$ = this.networkValidation.asObservable();

    constructor(private http: HttpClient,
                private router: Router,
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

    changeNetworkValidation(bool){
        this.networkValidation = bool;
    }

    toSearchPage(){
        this.router.navigateByUrl('/admin', { skipLocationChange: true}).then( () =>
            this.router.navigate(['/search'])
            );
    }

    // changeNetworkValidation(bool){
    //     this.networkValidation.next(bool);
    // }




}