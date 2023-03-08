import { Observable } from 'rxjs';
import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { setTimeout } from 'timers';

@Injectable({
  providedIn: 'root'
})
export class AuthService{


  
  constructor(private http:HttpClient) { 
    
  }
  
  private url = 'http://localhost:3300';
  
  onLoginUser(user:string, pwd:string):Observable<any>{

    console.log('user:', user, ' pwd:', pwd);
    
    const url = `${this.url}/user/login`;

    return this.http.post(url, {
      user: user,
      pwd: pwd
    })
  }

  onRegister(user:string, pwd:string, email:string, age:string):Observable<any>{

    console.log('user:', user, ' pwd:', pwd);
    
    const url = `${this.url}/user/newUser`;

    return this.http.post(url, {
      user: user,
      pwd: pwd,
      email:email,
      age:age
    })

  }

  loggedIn():boolean{ //Comprueba si el token existe o no
    return !!localStorage.getItem('token');
  }

  getToken(){ //Devuelve el token

    return localStorage.getItem('token');
  }

  onLogOut(){
    localStorage.removeItem('token');
  }


}
