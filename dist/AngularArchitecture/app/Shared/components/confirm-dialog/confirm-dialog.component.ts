import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  title: string;
  message: string;
  //Mat_ProjectsList = [];
 

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    
     }
  ngOnInit() {
  }
  selectedFile = null;
  // onFileChange(e) {
    
  //   this.selectedFile = <File>e.target.files[0];
  //   this.dialogRef.close({event:this.selectedFile,data:this.local_data});
  // }

}
