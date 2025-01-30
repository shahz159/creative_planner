import { DOCUMENT } from '@angular/common';
import { Component, OnInit , Inject, Renderer2} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-confirmdialog',
  templateUrl: './confirmdialog.component.html',
  styleUrls: ['./confirmdialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  title: string;
  message: string;
  currentLang:"ar"|"en"="ar";
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) { 
    }
  ngOnInit() {
    const lang:any = localStorage.getItem('language');
  this.currentLang = lang ? lang : 'en';

  }

}
