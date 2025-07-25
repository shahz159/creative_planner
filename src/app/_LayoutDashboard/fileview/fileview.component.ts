import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute,ParamMap  } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { PDFDocumentProxy, PDFProgressData} from 'ng2-pdf-viewer/src/app/pdf-viewer/pdf-viewer.module';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import { ProjectDetailsDTO } from 'src/app/_Models/project-details-dto';
import { NotificationService } from 'src/app/_Services/notification.service';

@Component({
  selector: 'app-fileview',
  templateUrl: './fileview.component.html',
  styleUrls: ['./fileview.component.css']
})
export class FileviewComponent implements OnInit {
  //url:string;
  public pdfSrc = "";
  contenttype: string;
  src: string;
  viewer: string;
  filename: string;
  submitby: string;
  HistorySearch: string
  ShowProgress: boolean = false;
  error: any;
  page = 1;
  progress: number = 0;
  rotation = 0;
  zoom = 0.5;
  zoomScale = 'page-width';
  originalSize = false;
  pdf: any;
  renderText = true;
  progressData: PDFProgressData;
  isLoaded = false;
  stickToPage = false;
  showAll = true;
  autoresize = true;
  fitToPage = false;
  outline: any[];
  isOutlineShown = false;
  pdfQuery = '';
  mobile = false;
  DocumentSource: number;
  MailDocId: number;
  _mailid: number;
  _AnnouncementDocId: number;
  createdBy: number;
  IsStreamDownload: any;
  _IsConfidential: string = 'false';
  Current_user_ID:string;
  _LoginUserId:string;
  Schedule_ID: any;
  url_project_code:any;
  url_master_code:any;
  invalid: boolean =false;
  objProjectDto: ProjectDetailsDTO;
  noRedirectionToSource:boolean=false;  // by default redirection is allowed.
  _originalUrl: string;
  Title_Name:any;


  constructor(private route: ActivatedRoute,public service: ProjectTypeService,private notifyService: NotificationService
  ) {   
    this._LoginUserId = this.Current_user_ID;
    this.objProjectDto = new ProjectDetailsDTO();
  }


  ngOnInit(): void { 
debugger
    this.Current_user_ID = localStorage.getItem('EmpNo');
    this.IsStreamDownload = localStorage.getItem('IsStreamDownload');
    var decoder = new TextDecoder();
    this.url_project_code=this.route.snapshot.params['projectcode'];
    let surl = this.route.snapshot.params['url'];
    this.route.queryParams.subscribe(async params => {
      debugger
      let surl = params['url'];
      const arr = surl.split(',').map(element => {
        return Number(element);
      });
      this.src = decoder.decode(new Uint8Array(arr));
      let uid = params['uid'];
      const arruid = uid.split(',').map(element => {
        return Number(element);
      });
      this.src = decoder.decode(new Uint8Array(arr));
      this._originalUrl = decoder.decode(new Uint8Array(arr));
      await this.getTemporaryUrl(this.src);

        if (decoder.decode(new Uint8Array(arruid)).toString() != this.Current_user_ID.toString()) {
          this.viewer='';
          this.invalid=true;
        alert('Invalid User');
        return false;
      }
      let type = params['type']; 
            let officetext = ".ppt, .pptx, .doc, .docx, .xls, .xlsx";
            let office = officetext.includes(type.toLowerCase());

            let googletext = ".txt,.css, .html, .php, .c, .cpp, .h, .hpp, .js, .pages, .ai, .psd, .tiff, .dxf, .svg, .eps, .ps, .ttf, .xps, .zip, .rar";
            let google = googletext.includes(type.toLowerCase());

            let pdftext = ".pdf, .application/pdf"
            let pdf = pdftext.includes(type.toLocaleLowerCase());

            let Imagetext = ".jpg, .jpeg, .webp, .avif, .jfif, .svg, .ico, .gif .image/jpg, .image/png, .png"
            let Image = Imagetext.includes(type.toLocaleLowerCase());

            let Audiotext = ".mp3, .wav, .ogg"
            let Audio = Audiotext.includes(type.toLocaleLowerCase());

            let Videotext = ".mp4, .mov, .wmv, .avi, .webm"
            let Video = Videotext.includes(type.toLocaleLowerCase());

            if (office) {
              this.viewer = "office";
            }
            else if (google) {
              this.viewer = "google";
            }
            else if (pdf) {
              this.viewer = "pdf";
              this.ShowProgress = true;
            }
            else if (Image) {
              this.viewer = "image";
            }
            else if (Audio) {
              this.viewer = "Audio";
            }
            else if (Video) {
              this.viewer = "Video";
            }
            else {
              this.viewer = "";
            }




      let scontenttype = '';
      this.filename = params['filename'];
      this.filename = this.filename.replace(/%26/g, "&");
      this.submitby = params['submitby'];
      this.submitby = this.submitby.replace(/%26/g, "&");
      console.log(this.filename,"filename123");

      if(this.viewer==null || this.viewer=='' || this.viewer ==undefined){
        this.service.PathExtention(this._originalUrl).subscribe(
          da => {
            scontenttype = da["ContentType"];
            let contenttype = scontenttype;//decoder.decode(new Uint8Array(arrct));

            let officetext = ".ppt, .pptx, .doc, .docx, .xls, .xlsx";
            let office = officetext.includes(contenttype.toLowerCase());

            let googletext = ".txt,.css, .html, .php, .c, .cpp, .h, .hpp, .js, .pages, .ai, .psd, .tiff, .dxf, .svg, .eps, .ps, .ttf, .xps, .zip, .rar";
            let google = googletext.includes(contenttype.toLowerCase());

            let pdftext = ".pdf, .application/pdf"
            let pdf = pdftext.includes(contenttype.toLocaleLowerCase());

            let Imagetext = ".jpg, .jpeg, .webp, .avif, .jfif, .svg, .ico, .gif .image/jpg, .image/png, .png"
            let Image = Imagetext.includes(contenttype.toLocaleLowerCase());

            // let Audiotext = ".mp3, .wav, .ogg"
            // let Audio = Audiotext.includes(contenttype.toLocaleLowerCase());

            // let Videotext = ".mp4, .mov, .wmv, .avi, .webm"
            // let Video = Videotext.includes(contenttype.toLocaleLowerCase());

            if (office) {
              this.viewer = "office";
            }
            else if (google) {
              this.viewer = "google";
            }
            else if (pdf) {
              this.viewer = "pdf";
            }
            else if (Image) {
              this.viewer = "image";
            }
            // else if (Audio) {
            //   this.viewer = "Audio";
            // }
            // else if (Video) {
            //   this.viewer = "Video";
            // }
            else {
              this.viewer = "";
            }
          });
      }

      this.url_master_code=params['mastercode']; 
      this.noRedirectionToSource=params['noRedirection']?params['noRedirection']=='true':false;
      this.Schedule_ID=params['Schedule_ID'];
      this.Title_Name=params['Title_Name'];
    });
  }


  async getTemporaryUrl(src: string) {
    console.error(`fetching URL for ${src}`,'original URL');
    //  (let image of this.dashboardBannersImages)   
    const expiryTime = new Date();
      expiryTime.setMinutes(expiryTime.getMinutes() + 5); // 5 minutes expiry
 
      try {
        src = await this.service.getSasUrl(src, expiryTime);
        this.src = src;
        console.error(`fetching SAS URL for ${src}`);
      } catch (error) {
        console.error(`Error fetching SAS URL for ${src}`, error);
      }
    // }
  }

  incrementZoom(amount: number) {
    this.zoom += amount;
  }
  incrementPage(amount: number) {
    this.page += amount;
  }

  /**
  * Get pdf information after it's loaded
  * @param pdf pdf document proxy
  */
  afterLoadComplete(pdf: PDFDocumentProxy) {
    this.pdf = pdf;

    this.loadOutline();
  }

  /**
   * Get outline
   */
  loadOutline() {
    this.pdf.getOutline().then((outline: any[]) => {
      this.outline = outline;
    });
  }

  rotate(angle: number) {
    this.rotation += angle;
  }
  /**
   * Pdf loading progress callback
   * @param progressData pdf progress data
   */
  onProgress(progressData: PDFProgressData) {
    console.log(progressData);
    this.progressData = progressData;

    this.isLoaded = progressData.loaded >= progressData.total;
    this.error = null; // clear error
    this.progress = Math.round(progressData.loaded / progressData.total * 100);
    if (this.progress == 100) this.ShowProgress = false;
    // console.log(`Uploaded! ${this.progress}%`);

  }


  getInt(value: number): number {
    return Math.round(value);
  }

  /**
   * Navigate to destination
   * @param destination pdf navigate to
   */
  // navigateTo(destination: any) {
  //   this.pdfComponent.pdfLinkService.goToDestination(destination);
  // }

  /**
   * Scroll view
   */
  // scrollToPage() {
  //   this.pdfComponent.pdfViewer.scrollPageIntoView({
  //     pageNumber: 3
  //   });
  // }
  /**
   * Page rendered callback, which is called when a page is rendered (called multiple times)
   *
   * @param e custom event
   */
  pageRendered(e: CustomEvent) {
    console.log('(page-rendered)', e);
  }

  /**
   * Page initialized callback.
   *
   * @param {CustomEvent} e
   */
  pageInitialized(e: CustomEvent) {
    console.log('(page-initialized)', e);
  }

  // searchQueryChanged(newQuery: string) {
  //   if (newQuery !== this.pdfQuery) {
  //     this.pdfQuery = newQuery;
  //     this.pdfComponent.pdfFindController.executeCommand('find', {
  //       query: this.pdfQuery,
  //       highlightAll: true
  //     });
  //   } else {
  //     this.pdfComponent.pdfFindController.executeCommand('findagain', {
  //       query: this.pdfQuery,
  //       highlightAll: true
  //     });
  //   }
  // }

  @HostListener('window:resize', ['$event'])
  onResize(event) {

    if (event.target.innerWidth <= 768)
      this.mobile = true;
    else
      this.mobile = false;

  }

  download(url, filename) { 

    this.objProjectDto.Project_Code=this.url_project_code;
    this.objProjectDto.Emp_No=this.Current_user_ID;
    this.objProjectDto.filename=this.filename;

    this.service._InsertDownloadhistoryServie(this.objProjectDto).subscribe(data=>{
        this.notifyService.showSuccess("Downloaded successfully","Success");
    });

      fetch(url).then(function (t) { 
        return t.blob().then((b) => {debugger
          var a = document.createElement("a");
          a.href = URL.createObjectURL(b);
          a.setAttribute("download", filename);
          a.click();
        }
        );
      });
  }

  history_list:any;
  datelist:any;
  // HistoryList: any;
  DownloadHistory(filename) {

    this.objProjectDto.Project_Code=this.url_project_code;
    this.objProjectDto.filename=filename;

    this.service._GetDownloadhistoryServie(this.objProjectDto).subscribe(data=>{
       this.history_list=(JSON.parse(data[0]['historyList']));
       this.datelist=(JSON.parse(data[0]['DatesJson']));
      console.log(JSON.parse(data[0]['historyList']),"history");
    });
  }
  searchhistory() {
    this.HistorySearch = "";
  }



  newDetailsaction(pcode,acode:string|undefined) {
    let qparams='';
        if(acode!==undefined){
          qparams=`?actionCode=${acode}`;
        }
        let name: string = 'Details';
        var url = document.baseURI + name;
        var myurl = `${url}/${pcode}${qparams}`;
        var myWindow = window.open(myurl,pcode);
        myWindow?.focus();
   }

   viewMeeting(sid) {
        let name: string = 'Meeting-Details';
        var url = document.baseURI + name;
        var myurl = `${url}/${sid}`;
        var myWindow = window.open(myurl,sid);
        myWindow?.focus();
   }




   // new



   testsrc='/assets/action_first_27_03_2025_protected.pdf';
   testpassword='';

     onError(e){
        console.log(e);
        if(e.code==2){
             //incorrect password provided
             const inputval=prompt('Enter password');
             this.testpassword=inputval;
        }
     }

   //



// Password protected file open start

isFileRequiredPassword:boolean=false;  // if opened file required password or not.
filePassword:string='';
filePasswordInput:string='';  // password input by the user.
showPasswordText:boolean=false;  // show or hide password input by the user.
passwordNotProvided:boolean=false; 
incorrectPassword:boolean=false; // whether user input incorrect password or not. 

togglePasswordVisibility(){
  this.showPasswordText=!this.showPasswordText;
}

onFilePasswordSubmit(){
     if(!this.filePasswordInput){
        this.passwordNotProvided=true;
        return;
     }
     else{
        this.passwordNotProvided=false;
        this.filePassword=this.filePasswordInput; // provide input as password to pdf-viewer.
        this.closePasswordRequiredDialog();  // close the prompt.
     }
}


showPasswordRequiredDialog(){
   document.getElementById('password-req-prompt')?.classList.remove('d-none');
}

closePasswordRequiredDialog(){
   document.getElementById('password-req-prompt')?.classList.add('d-none');
   this.showPasswordText=false;
   this.passwordNotProvided=false;
   this.incorrectPassword=false;
}



onPDFError(e:any){
   console.log(e);
   if(e.code==1){   // No password given exception.
       this.isFileRequiredPassword=true;  // this file required password.
       this.filePasswordInput='';   // clear input if present.
       this.showPasswordRequiredDialog();  // show prompt.
   }
   else if(e.code==2){  // When password input is incorrect.
       this.isFileRequiredPassword=true;  // this file required password.
       this.showPasswordRequiredDialog();  // show prompt.
       this.incorrectPassword=true;   // input password is incorrect.
   }
}

//  end.


}


