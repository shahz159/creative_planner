import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private adminRoutes:any=[
    '/backend/masterforms/UserList',
    '/backend/masterforms/UserRegistration',
    '/backend/masterforms/Company',
    '/backend/masterforms/Department',
    '/backend/masterforms/Role',
    '/backend/masterforms/Designation'
  ];


  constructor(private router: Router) { }
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentRoute = state.url;
    console.log(currentRoute,"urrl"); 
    if (localStorage.getItem('isLoggedIn') == "true") {

      if (currentRoute === '/login' || currentRoute === '/') {
        this.router.navigate(['/backend/Streamdashboard']);
        return false;
      }
      else if(this.adminRoutes.includes(currentRoute)&&this.isAdmin()==false){
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false; 
      }

      return true;
    } else {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }

  }
  public isLoggedIn(): boolean {
    let status = false;
    if (localStorage.getItem('isLoggedIn') == "true") {
      status = true;
      //this.router.navigate(['/login'], {queryParams: {returnUrl: state}});
    }
    else {
      status = false;
    }
    return status;
  }



  public isAdmin():boolean{
    let isAllowed=false;
    const admin=502;
    let dmsuserinfo:any=localStorage.getItem('DMS_UserInfo');
    if(dmsuserinfo){
      dmsuserinfo=JSON.parse(dmsuserinfo);
      const uRole=dmsuserinfo.UserRole;
      isAllowed=uRole==admin;
    }
    return isAllowed;
  }



}
