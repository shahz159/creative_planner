import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CreateProjectComponent } from '../_LayoutDashboard/create-project/create-project.component';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class DeactivateCreateProjectService implements CanDeactivate<CreateProjectComponent>{

  constructor(){ }
  canDeactivate(component: CreateProjectComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot):Promise<boolean>|boolean {
    
    if(component.confirmBeforeRoute)  
    { 
        // user is on step3 and trying to leave page without submitting the project.
       return Swal.fire({
          title:'Project Not Submitted',
          text:"Click 'Submit project' to send the project for approval. Leaving this page will keep the project as a draft.",
          showConfirmButton:true,
          confirmButtonText:'Keep as draft',
          showCancelButton:true,
          cancelButtonText:'Back',
          // icon:'warning'
       }).then((decision)=>decision.isConfirmed?true:false)

    }
    else
    {
      return true;
    }
   
  }
}
