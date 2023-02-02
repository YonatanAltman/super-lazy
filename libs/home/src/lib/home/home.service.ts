import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface User{
    id:number;
    firstName: string;
    lastName: string;
    image: string;
}
@Injectable()
export class HomeService{
    constructor(private http: HttpClient) {
    }
    get():Observable<User>{
        return this.http.get<User>('https://dummyjson.com/users/2');
    }

}
