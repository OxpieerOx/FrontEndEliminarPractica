import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(
    private router: Router
  ) { }

 async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const token = localStorage.getItem('token');
    if(!token){
      this.router.navigate(['']);
    }else{
      return true;
    }

    return false;
 }
}
