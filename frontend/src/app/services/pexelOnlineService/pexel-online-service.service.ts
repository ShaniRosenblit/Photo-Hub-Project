import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';

const httpOption={
headers :new HttpHeaders({
  'Authorization':'563492ad6f9170000100000163d397940c2141cfa5f99974cfc4ef08'
})
}
@Injectable({
  providedIn: 'root'
})
export class PexelOnlineServiceService {

  constructor(private http : HttpClient) { }

  getData(search:string,countPhoto:number): Observable<any>{
    const url =`https://api.pexels.com/v1/search?query=${search}&per_page=${countPhoto}`;
return this.http.get<any>(url , httpOption)
          .pipe(catchError(this.handelError))
  }

  handelError(err){
return throwError(`server error ${err}`);
  }
}
