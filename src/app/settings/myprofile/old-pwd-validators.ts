import { AbstractControl, ValidationErrors } from '@angular/forms';
declare const dcodeIO:any;
export class OldPwdValidators {
    
    static OldPasswordMethod(control: AbstractControl) : Promise<ValidationErrors | null> {  
        return new Promise((resolve,reject) => {  debugger
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

// new
      static OldPasswordMethod2(control: AbstractControl) : Promise<ValidationErrors | null> {  
        return new Promise((resolve,reject) => { 
          let currentUserSP=localStorage.getItem('currentUser_SP');
          if(currentUserSP){
             const _currentUserSPobj=JSON.parse(currentUserSP)[0];
             const _CryptedPassword=_currentUserSPobj.Password;   // current existing password (in encrypted form).
             const inputOldPassword=control.value;     // old password input by user.  (in plain text form).
             const isMatched=dcodeIO.bcrypt.compareSync(inputOldPassword, _CryptedPassword);
             if(isMatched)
             resolve(null);
             else 
             resolve({ OldPasswordMethod: true });
          }
          else
          resolve(null);
         
        });    
      }

}
