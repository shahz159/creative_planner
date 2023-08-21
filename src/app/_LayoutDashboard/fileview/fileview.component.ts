import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute,ParamMap  } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { PDFDocumentProxy, PDFProgressData} from 'ng2-pdf-viewer/src/app/pdf-viewer/pdf-viewer.module';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';

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
  HistorySearch: string

  error: any;
  page = 1;
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
  IsCommunicarionMemoDownload: boolean;
  _IsConfidential: string = 'false';
  Current_user_ID:string;
  _LoginUserId:string;

  constructor(private route: ActivatedRoute,public service: ProjectTypeService
  ) {
    this._LoginUserId = this.Current_user_ID;
  }


  ngOnInit(): void {
    this.Current_user_ID = localStorage.getItem('EmpNo');
    var decoder = new TextDecoder();

    let surl = this.route.snapshot.params['url'];
    this.route.queryParams.subscribe(params => {

      let surl = params['url'];
      const arr = surl.split(',').map(element => {
        return Number(element);
      });
      this.src = decoder.decode(new Uint8Array(arr));
      let uid = params['uid'];
      const arruid = uid.split(',').map(element => {
        return Number(element);
      });

        if (decoder.decode(new Uint8Array(arruid)).toString() != this.Current_user_ID.toString()) {
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


    
      
      let scontenttype = '';
      this.filename = params['filename'];
      this.filename = this.filename.replace(/%26/g, "&");
      console.log(this.filename,"filename123");

      if(this.viewer==null || this.viewer=='' || this.viewer ==undefined){
        this.service.PathExtention(this.src).subscribe(
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
    });
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
      fetch(url).then(function (t) {
        return t.blob().then((b) => {
          var a = document.createElement("a");
          a.href = URL.createObjectURL(b);
          a.setAttribute("download", filename);
          a.click();
        }
        );
      });

  }


  // HistoryList: any;
  // DownloadHistory() {
  //   // alert(this.MailDocId);
  //   this._obj.MailDocId = this.MailDocId;
  //   this._obj.OrganizationId = this._LoginUserId;
  //   this._obj.AnnouncementDocId = this._AnnouncementDocId;

  //   this._obj.MailId = this._mailid;
  //   this.newmemoService.HistoryDownload(this._obj).subscribe(
  //     data => {
  //       this._obj = data as InboxDTO;
  //       this.HistoryList = JSON.parse(this._obj.RequestJson);
  //       this.HistoryList.forEach(element => {
  //         element.DatesJson = JSON.parse(element.DatesJson);
  //       });
  //       // console.log(this.HistoryList, "HistoryList");
  //     })
  // }
  searchhistory() {
    this.HistorySearch = "";
  }
}


