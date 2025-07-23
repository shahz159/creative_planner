import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class MinPageService{
      
   public pageMinimized=new BehaviorSubject<string>('');

   onMinimizePage=this.pageMinimized.asObservable();
   minimizePage(page:string){
     localStorage.setItem('minimize_pages',page);
     this.pageMinimized.next(page);
   }

   closeMinimizedPage(){
      localStorage.removeItem('minimize_pages');
      this.pageMinimized.next(null);
   }


  

}