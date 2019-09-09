import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from './model/item';
import { Observable, of } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class GiftService {

    constructor(private httpClient: HttpClient) {
        
    }

    GetGifts() : Observable<any>{
        const headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        headers.set('Access-Control-Allow-Origin', '*');
        return this.httpClient.get('http://localhost:8080/get_gifts', {headers: headers});
    }

    AddDonatorToGift(name: string, email: string) : Observable<any> {
        const headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        headers.set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post('http://localhost:8080/add_donator', {name: name, email: email}, {headers: headers});
    }
}
