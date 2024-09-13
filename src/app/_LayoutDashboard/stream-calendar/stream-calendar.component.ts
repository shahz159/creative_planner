import { Component, OnInit } from '@angular/core';
import { MatCalendar, MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment'
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NotificationService } from 'src/app/_Services/notification.service';
declare var $: any;
@Component({
  selector: 'app-stream-calendar',
  templateUrl: './stream-calendar.component.html',
  styleUrls: ['./stream-calendar.component.css']
})
export class StreamCalendarComponent implements OnInit {
  disablePreviousDate = new Date();
  selectDay: any;
  _StartDate: any;
  Startts: any;
  validStartTimearr:any=[];
  ScheduleType: any;
  Endtms: any;
  Description_Type: any;
  content: string = '';
  selectedOption: string = 'option1'; 
  agendaInput: string | undefined;
  isClassAdded: boolean = false;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '5rem',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      [
        // 'bold',
        // 'italic',
        // 'underline',
        'undo',
        'redo',
        'strikeThrough',
        'subscript',
        'superscript',
        'indent',
        'outdent',
        // 'insertUnorderedList',
        // 'insertOrderedList',
        'heading',
        // 'fontName'
      ],
      [
        // 'fontSize',
        // 'textColor',
        // 'backgroundColor',
        'customClasses',

        'unlink',
        'insertImage',
        'insertVideo',
        'insertHorizontalRule',
        'removeFormat',
        'toggleEditorMode'
      ]
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };



  constructor(
    private notifyService: NotificationService,
  ) { }




  onKeyPress() {
    // Check if the input field is empty
    if (this.agendaInput===undefined||this.agendaInput.trim() === '') {
      // If input field is empty, remove the class
      this.isClassAdded = false;
    } else {
      // If input field is not empty, add the class
      this.isClassAdded = true;
    }
  }
  togglemeetingtypeOption(option: string) {
    this.selectedOption = option;
  }











  ngOnInit(): void {
    this.initAutosize();
    this.initFirstclass();
    this.MinLastNameLength = true;
    this._StartDate = moment().format("YYYY-MM-DD").toString();
  }
  
  private initAutosize() {
    function autosize() {
      var $text = $('.task-add-item-textarea');

      $text.each(function () {
        $(this).attr('rows', 1);
        resize($(this));
      });

      $text.on('input', function () {
        resize($(this));
      });

      function resize($element) {
        $element.css({
          'height': 'auto',
          'min-height': '36px'
        });
        $element.css('height', $element[0].scrollHeight + 'px');
      }
    }
    autosize();
  }

  private initFirstclass() {
    function firstclass() {
      $(document).ready(function() {
        $('.month-slot-body-row').each(function() {
          var $firstDiv = $(this).find('.month-body-col').first();         
          $firstDiv.addClass('month-first-col-dropdown');
        });
      });
    }
    firstclass();
  }

  switch_calender() {
    document.getElementById("switch-calendar").classList.add("active");
    document.getElementById("switch-task").classList.remove("active");
    document.getElementById("calendar-search").style.display = "block";
    document.getElementById("calendar-action").style.display = "block";
    document.getElementById("main-calendar").style.display = "flex";
    document.getElementById("task-calendar").style.display = "none";
    document.getElementById("all-cal-date").style.display = "flex";
    document.getElementById("task-cal-date").style.display = "none";
  }

  switch_task() {
    document.getElementById("switch-calendar").classList.remove("active");
    document.getElementById("switch-task").classList.add("active");
    document.getElementById("calendar-search").style.display = "none";
    document.getElementById("calendar-action").style.display = "none";
    document.getElementById("main-calendar").style.display = "none";
    document.getElementById("task-calendar").style.display = "flex";
    document.getElementById("all-cal-date").style.display = "none";
    document.getElementById("task-cal-date").style.display = "flex";
  }

  close_create_list() {
    document.getElementById("kt-create-list-dropdown-menu").classList.remove("show");
  }

  task_add_close() {
    document.getElementById("taskAdd").classList.remove("show");
  }

  day_div() {
    document.getElementById("kt-day-div").style.display = "block";
    document.getElementById("kt-week-div").style.display = "none";
    document.getElementById("kt-month-div").style.display = "none";
    document.getElementById("kt-sch-div").style.display = "none";
    document.getElementById("day-nme").style.display = "inline-block";
    document.getElementById("week-nme").style.display = "none";
    document.getElementById("month-nme").style.display = "none";
    document.getElementById("sch-nme").style.display = "none";
    document.getElementById("day-date").style.display = "block";
    document.getElementById("week-date").style.display = "none";
    document.getElementById("month-date").style.display = "none";
    document.getElementById("schedule-date").style.display = "none";
  }

  week_div() {
    document.getElementById("kt-day-div").style.display = "none";
    document.getElementById("kt-week-div").style.display = "block";
    document.getElementById("kt-month-div").style.display = "none";
    document.getElementById("kt-sch-div").style.display = "none";
    document.getElementById("day-nme").style.display = "none";
    document.getElementById("week-nme").style.display = "inline-block";
    document.getElementById("month-nme").style.display = "none";
    document.getElementById("sch-nme").style.display = "none";
    document.getElementById("day-date").style.display = "none";
    document.getElementById("week-date").style.display = "block";
    document.getElementById("month-date").style.display = "none";
    document.getElementById("schedule-date").style.display = "none";
  }

  month_div() {
    document.getElementById("kt-day-div").style.display = "none";
    document.getElementById("kt-week-div").style.display = "none";
    document.getElementById("kt-month-div").style.display = "block";
    document.getElementById("kt-sch-div").style.display = "none";
    document.getElementById("day-nme").style.display = "none";
    document.getElementById("week-nme").style.display = "none";
    document.getElementById("month-nme").style.display = "inline-block";
    document.getElementById("sch-nme").style.display = "none";
    document.getElementById("day-date").style.display = "none";
    document.getElementById("week-date").style.display = "none";
    document.getElementById("month-date").style.display = "block";
    document.getElementById("schedule-date").style.display = "none";
  }

  sch_div() {
    document.getElementById("kt-day-div").style.display = "none";
    document.getElementById("kt-week-div").style.display = "none";
    document.getElementById("kt-month-div").style.display = "none";
    document.getElementById("kt-sch-div").style.display = "block";
    document.getElementById("day-nme").style.display = "none";
    document.getElementById("week-nme").style.display = "none";
    document.getElementById("month-nme").style.display = "none";
    document.getElementById("sch-nme").style.display = "inline-block";
    document.getElementById("day-date").style.display = "none";
    document.getElementById("week-date").style.display = "none";
    document.getElementById("month-date").style.display = "none";
    document.getElementById("schedule-date").style.display = "block";
  }
  teams_icon(){
    document.getElementById("teams-icon").style.display = "inline-block";
    document.getElementById("google-icon").style.display = "none";
    document.getElementById("skype-icon").style.display = "none";
    document.getElementById("zoom-icon").style.display = "none";
  }
  google_icon(){
    document.getElementById("teams-icon").style.display = "none";
    document.getElementById("google-icon").style.display = "inline-block";
    document.getElementById("skype-icon").style.display = "none";
    document.getElementById("zoom-icon").style.display = "none";
  }
  skype_icon(){
    document.getElementById("teams-icon").style.display = "none";
    document.getElementById("google-icon").style.display = "none";
    document.getElementById("skype-icon").style.display = "inline-block";
    document.getElementById("zoom-icon").style.display = "none";
  }
  zoom_icon(){
    document.getElementById("teams-icon").style.display = "none";
    document.getElementById("google-icon").style.display = "none";
    document.getElementById("skype-icon").style.display = "none";
    document.getElementById("zoom-icon").style.display = "inline-block";
  }
  change_event(){
    document.getElementById("event-title").style.display = "block";
    document.getElementById("task-title").style.display = "none";
    document.getElementById("nav-event").style.display = "block";
    document.getElementById("nav-task").style.display = "none";
    document.getElementById("create-event-div").style.display = "block";
    document.getElementById("create-task-div").style.display = "none";
    document.getElementById("create-event-badge").classList.add("active");
    document.getElementById("create-task-badge").classList.remove("active");
  }
  change_task(){
    document.getElementById("event-title").style.display = "none";
    document.getElementById("task-title").style.display = "block";
    document.getElementById("nav-event").style.display = "none";
    document.getElementById("nav-task").style.display = "block";
    document.getElementById("create-event-div").style.display = "none";
    document.getElementById("create-task-div").style.display = "block";
    document.getElementById("create-event-badge").classList.remove("active");
    document.getElementById("create-task-badge").classList.add("active");
  }
  createEventonlyTaskModal(){
    document.getElementById("event-title").style.display = "none";
    document.getElementById("task-title").style.display = "block";
    document.getElementById("nav-event").style.display = "none";
    document.getElementById("nav-task").style.display = "block";
    document.getElementById("create-event-div").style.display = "none";
    document.getElementById("create-task-div").style.display = "block";
    document.getElementById("create-event-badge").classList.remove("active");
    document.getElementById("create-task-badge").classList.add("active");
  }
  customEventModal(){
    document.getElementById("customEventModal").style.display = "block";
    document.getElementById("customEventModal").classList.add("show");
    document.getElementById("customEventModalBackdrop").style.display = "block";
    document.getElementById("customEventModalBackdrop").classList.add("show");
  }
  customEventModal_dismiss(){
    document.getElementById("customEventModal").style.display = "none";
    document.getElementById("customEventModal").classList.remove("show");
    document.getElementById("customEventModalBackdrop").style.display = "none";
    document.getElementById("customEventModalBackdrop").classList.remove("show");
  }
  customTaskModal(){
    document.getElementById("customTaskModal").style.display = "block";
    document.getElementById("customTaskModal").classList.add("show");
    document.getElementById("customTaskModalBackdrop").style.display = "block";
    document.getElementById("customTaskModalBackdrop").classList.add("show");
  }
  customTaskModal_dismiss(){
    document.getElementById("customTaskModal").style.display = "none";
    document.getElementById("customTaskModal").classList.remove("show");
    document.getElementById("customTaskModalBackdrop").style.display = "none";
    document.getElementById("customTaskModalBackdrop").classList.remove("show");
  }
  eventtaskitemtimeModal(){
    document.getElementById("eventtaskitemtimeModal").style.display = "block";
    document.getElementById("eventtaskitemtimeModal").classList.add("show");
    document.getElementById("eventtaskitemtimeModalBackdrop").style.display = "block";
    document.getElementById("eventtaskitemtimeModalBackdrop").classList.add("show");
  }
  eventtaskitemtimeModal_dismiss(){
    document.getElementById("eventtaskitemtimeModal").style.display = "none";
    document.getElementById("eventtaskitemtimeModal").classList.remove("show");
    document.getElementById("eventtaskitemtimeModalBackdrop").style.display = "none";
    document.getElementById("eventtaskitemtimeModalBackdrop").classList.remove("show");
  }
  createEventTaskModal(){
    document.getElementById("createEventTaskModal").style.display = "block";
    document.getElementById("createEventTaskModal").classList.add("show");
    document.getElementById("createEventTaskModalBackdrop").style.display = "block";
    document.getElementById("createEventTaskModalBackdrop").classList.add("show");
  }
  createEventTaskModal_dismiss(){
    document.getElementById("createEventTaskModal").style.display = "none";
    document.getElementById("createEventTaskModal").classList.remove("show");
    document.getElementById("createEventTaskModalBackdrop").style.display = "none";
    document.getElementById("createEventTaskModalBackdrop").classList.remove("show");
  }
  // propose_date_time_open() {
  //   document.getElementById("propose-date-time-div").classList.toggle("open");
  //   document.getElementById("propose-date-time-btn").classList.toggle("rotate");
  // }

  Propose_date_time_menu() {
    document.getElementById("propose-date-time-menu").classList.add("show");
  }

  Propose_date_time_menu_close() {
    document.getElementById("propose-date-time-menu").classList.remove("show");
  }


  // month_more_view() {
  //   document.getElementById("month-day-events-more").classList.add("show");
  // }

  close_month_more_view() {
    document.getElementById("month-day-events-more").classList.remove("show");
  }




/////////////////////////////////////////// Create Event and Create Task sidebar start /////////////////////////////////////////////////////////
Title_Name: any;
notProvided: boolean = false;
MinLastNameLength: boolean;
characterCount: number = 0;
allAgendas: any = [];
agendasAdded: number = 0;
_lstMultipleFiales: any;
myFiles: string[] = [];


LastLengthValidation11() {
  if (this.Title_Name&&(this.Title_Name.trim().length < 3)) {
    this.MinLastNameLength = false;
  }
  else {
    this.MinLastNameLength = true;
  }
}


updateCharacterCount(): void {

  // Create a temporary div element to strip out HTML tags
  const tempElement = document.createElement('div');
  tempElement.innerHTML = this.Description_Type;
  const textContent = tempElement.textContent || tempElement.innerText || '';
  this.characterCount = textContent.length;
}


addAgenda() {
  if (this.agendaInput && this.agendaInput.trim().length > 0) {
    this.agendasAdded += 1;
    const agenda = {
      index: this.agendasAdded,
      name: this.agendaInput
    };
    this.allAgendas.push(agenda);
    this.agendaInput = undefined;
  }

  console.log("allAgendas:", this.allAgendas);
}



editAgenda(index: number) {
  $(`#agenda-label-${index}`).addClass('d-none');
  $(`#agenda-text-field-${index}`).removeClass('d-none');
  $(`#agenda-text-field-${index}`).focus();

  $(`#edit-cancel-${index}`).removeClass('d-none');   // cancel btn is visible.
  $(`#editing-save-${index}`).removeClass('d-none');   // save btn is visible.

  $(`#edit-agendaname-btn-${index}`).addClass('d-none');  // edit btn is invisible.
  $(`#remove-agenda-btn-${index}`).addClass('d-none');   // delete btn is invisible.

}



deleteAgenda(index: number) {

  if (this.allAgendas.length > 0 && (index < this.allAgendas.length && index > -1)) {
    const agenda_toRemove=this.allAgendas[index].name;
    this.allAgendas.splice(index, 1);
    this.notifyService.showSuccess(agenda_toRemove,'Agenda removed.');
  }
  console.log("allAgendas:", this.allAgendas);
}


cancelAgendaEdit(index: number) {
  const tf: any = document.getElementById(`agenda-text-field-${index}`);
  tf.value = this.allAgendas[index].name;

  $(`#agenda-label-${index}`).removeClass('d-none');   // label is visible.
  $(`#agenda-text-field-${index}`).addClass('d-none');   // textfield is invisible.
  $(`#edit-cancel-${index}`).addClass('d-none');   // cancel btn is visible.
  $(`#editing-save-${index}`).addClass('d-none');   // save btn is visible.
  $(`#edit-agendaname-btn-${index}`).removeClass('d-none');  // edit btn is visible.
  $(`#remove-agenda-btn-${index}`).removeClass('d-none');   // delete btn is visible.
}


updateAgenda(index: number) {
  const tf: any = document.getElementById(`agenda-text-field-${index}`);
  this.allAgendas[index].name = tf.value;

  $(`#agenda-label-${index}`).removeClass('d-none'); // label is visible.
  $(`#agenda-text-field-${index}`).addClass('d-none');  // textfield is invisible.
  $(`#edit-cancel-${index}`).addClass('d-none');   // cancel btn is visible.
  $(`#editing-save-${index}`).addClass('d-none');   // save btn is visible.
  $(`#edit-agendaname-btn-${index}`).removeClass('d-none');  // edit btn is visible.
  $(`#remove-agenda-btn-${index}`).removeClass('d-none');   // delete btn is visible.


  console.log('all agendas after updating:', this.allAgendas);
}






onFileChange(event) {

  if (event.target.files.length > 0) {
    var length = event.target.files.length;
    for (let index = 0; index < length; index++) {
      const file = event.target.files[index];
      var contentType = file.type;
      if (contentType === "application/pdf") {
        contentType = ".pdf";
      }
      else if (contentType === "image/png") {
        contentType = ".png";
      }
      else if (contentType === "image/jpeg") {
        contentType = ".jpeg";
      }
      else if (contentType === "image/jpg") {
        contentType = ".jpg";
      }
      this.myFiles.push(event.target.files[index].name);
      // alert(this.myFiles.length);
      console.log(this.myFiles, "attach")
      //_lstMultipleFiales
      var d = new Date().valueOf();
      this._lstMultipleFiales = [...this._lstMultipleFiales, {
        UniqueId: d,
        FileName: event.target.files[index].name,
        Size: event.target.files[index].size,
        Files: event.target.files[index]
      }];
    }
  }

  const uploadFileInput = (<HTMLInputElement>document.getElementById("uploadFile"));
  uploadFileInput.value = null;
  uploadFileInput.style.color = this._lstMultipleFiales.length === 0 ? 'darkgray' : 'transparent';
}








///////////////////////////////////////////  Create Event and Create Task sidebar End /////////////////////////////////////////////////////////



 
















  

}