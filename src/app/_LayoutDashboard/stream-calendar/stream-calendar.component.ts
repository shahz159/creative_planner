import { Component, OnInit } from '@angular/core';
import { MatCalendar, MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { AngularEditorConfig } from '@kolkov/angular-editor';
declare var $: any;
@Component({
  selector: 'app-stream-calendar',
  templateUrl: './stream-calendar.component.html',
  styleUrls: ['./stream-calendar.component.css']
})
export class StreamCalendarComponent implements OnInit {
  disablePreviousDate = new Date();
  // constructor() { }
  selectDay: any;
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




















  

}