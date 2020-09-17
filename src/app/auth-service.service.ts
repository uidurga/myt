import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { 
   


  
  // user(data):Observable<any>{
  //   return this.http.post('http://13.233.126.74:91/api/user', data);
  // }
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
  }

  user(data):Observable<any> {
    
    return this.http.post<{access_token:  string}>('http://13.233.126.74:91/api/user/GetUser', data).pipe(tap(res => {
    localStorage.setItem('access_token', res.access_token);
    
}))
  
  }



  register(data):Observable<any> {
    return this.http.post<{access_token: string}>('http://13.233.126.74:91/api/user/', data).pipe(tap(res => {
    this.user(data)
}))
}

logout() {
  localStorage.removeItem('access_token');
}

public get loggedIn(): boolean{
  return localStorage.getItem('access_token') !==  null;
}






}
