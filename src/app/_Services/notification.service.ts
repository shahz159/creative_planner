import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  //message:string;title:string;
  constructor(private toastr: ToastrService) { }

  showSuccess(message, title) {
    this.toastr.success(message, title,{
      closeButton:true
    });
  }
  showError(message, title) {
    this.toastr.error(message, title,{
      closeButton:true,
      // disableTimeOut: true,
      // tapToDismiss: false,
    });
  }
  showInfo(message, title) {
    this.toastr.info(message, title,{
      closeButton:true,
    });
  }
  showWarning(message, title) {
    this.toastr.warning(message, title,{
      closeButton:true
    });
  }
}