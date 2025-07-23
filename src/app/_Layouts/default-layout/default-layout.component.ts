import { Component, OnInit } from '@angular/core';
import { MinPageService } from 'src/app/_Services/minpage.serivce';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent{

  // showMinimizedWindow:boolean=false;
  // miniTop = 100;
  // miniLeft = 100;
  // width = 300;
  // height = 200;
  // miniUrl:any;

  // private minpageservice:MinPageService,private sanitizer: DomSanitizer
  constructor() { 
      
  }

  // ngOnInit(): void {    debugger

    

  //   this.minpageservice.onMinimizePage.subscribe((page)=>{
  //       document.url
  //        if(page){
  //           this.showMinimizedWindow=true;
  //           this.miniUrl=this.sanitizer.bypassSecurityTrustResourceUrl(page);
  //        }
  //        else{
  //          this.miniUrl=null;
  //          this.showMinimizedWindow=false;
  //        }
         
  //    });

  // }


  // ngAfterViewInit(){
  //      const minPage=localStorage.getItem('minimize_pages');
  //   if(minPage){
  //       this.showMinimizedWindow=true;
  //   } 
  // }


  //   startDrag(event: MouseEvent) {
  //   const startX = event.clientX;
  //   const startY = event.clientY;
  //   const startTop = this.miniTop;
  //   const startLeft = this.miniLeft;

  //   const onMove = (e: MouseEvent) => {
  //     this.miniTop = startTop + (e.clientY - startY);
  //     this.miniLeft = startLeft + (e.clientX - startX);
  //   };

  //   const stop = () => {
  //     document.removeEventListener('mousemove', onMove);
  //     document.removeEventListener('mouseup', stop);
  //   };

  //   document.addEventListener('mousemove', onMove);
  //   document.addEventListener('mouseup', stop);
  // }



  //   startResize(event: MouseEvent) {
  //   event.stopPropagation(); // avoid drag conflict
  //   const startX = event.clientX;
  //   const startY = event.clientY;
  //   const startWidth = this.width;
  //   const startHeight = this.height;

  //   const onResize = (e: MouseEvent) => {
  //     this.width = Math.max(200, startWidth + (e.clientX - startX));
  //     this.height = Math.max(150, startHeight + (e.clientY - startY));
  //   };

  //   const stop = () => {
  //     document.removeEventListener('mousemove', onResize);
  //     document.removeEventListener('mouseup', stop);
  //   };

  //   document.addEventListener('mousemove', onResize);
  //   document.addEventListener('mouseup', stop);
  // }
     

}
