import { AbstractControl, ValidationErrors } from '@angular/forms';
export class OldPwdValidators {
    
    static OldPasswordMethod(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve,reject) => {
            let OldPassword:any=localStorage.getItem('oldPassword');
            if(control.value !==OldPassword)
              resolve({ OldPasswordMethod: true });
            else 
              resolve(null);
        });    
      }
      static matchPwds(control: AbstractControl) {
        let newPwd2 = control.get('newPwd');
        let confirmPwd2 = control.get('confirmPwd');
        if(newPwd2.value !== confirmPwd2.value){
          return { pwdsDontMatch: true };
        }
        return null;
      }
}
