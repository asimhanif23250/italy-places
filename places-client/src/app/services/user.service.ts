import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UtilsService, TokenPayload } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private utilService: UtilsService) { }

  public register(user: TokenPayload): Observable<any> {    
    return this.utilService.request('post', 'register', user);
  }

  public login(user: TokenPayload): Observable<any> {
    return this.utilService.request('post', 'login', user);
  }

  public profile(): Observable<any> {
    return this.utilService.request('get', 'profile');
  }
}