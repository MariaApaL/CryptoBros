import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private auth:AuthService) { }

  intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{

    const token = this.auth.getToken();

    if(!token){
      return next.handle(req)
    }

    const tokenReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    })
    
    return next.handle(tokenReq);
  }

  /*
    Esto muestra en la Network del navegador el 'login' con nuestro token 'Bearer fd90SA...' y asi poder hacer
    peticiones privadas. No te preocupes si en la Network aparece como null nuestro token, ya que la primera
    vez que se realiza esto da la casualidad que el token se obtiene se guarda antes de recivirlo, pero podemos
    navegar con normalidad ya que nuestro token si llega correctamente.
  
  */
}
