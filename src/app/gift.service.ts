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
        /*const headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        headers.set('Access-Control-Allow-Origin', '*');
        return this.httpClient.get('http://localhost:8080/get_gifts', {headers: headers});*/
        let gifts = [
            {
                name: 'Vibrátor',
                numOfDonators: 2,
                maxNumOfDonators: 5
            },
            {
                name: 'Cica',
                numOfDonators: 3,
                maxNumOfDonators: 10
            },
            {
                name: 'Trabant',
                numOfDonators: 1,
                maxNumOfDonators: 3
            },
        ];
        return of(gifts);
    }

    AddDonatorToGift(name: string, email: string) {
        const headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        headers.set('Access-Control-Allow-Origin', '*');
        this.httpClient.post('http://localhost:8080/add_donator', {name: name, email: email}, {headers: headers}).subscribe((res)=>{
            return res;
        });
    }
}
