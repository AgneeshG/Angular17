import { Component, OnInit } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { Calendar } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import { FullCalendarComponent } from '@fullcalendar/angular';
import { HammerModule } from '@angular/platform-browser';
// import { IgxCalendarModule } from 'igniteui-angular';
import { IGX_CALENDAR_DIRECTIVES } from 'igniteui-angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import { ignoreElements } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { 
	IgxCalendarModule,
	IgxCardModule
 } from "igniteui-angular";

@Component({
  selector: 'app-sam-calendar',
  standalone: true,
  imports: [FullCalendarModule,HammerModule,IGX_CALENDAR_DIRECTIVES,FormsModule,IgxCalendarModule,IgxCardModule],
  templateUrl: './sam-calendar.component.html',
  styleUrl: './sam-calendar.component.css'
})
export class SamCalendarComponent implements OnInit {

  calendarEl:any
  calendar:any
  constructor(){

}
  ngOnInit() {
    this.initializeCalendar();
  }

  initializeCalendar() {
    this.calendarEl = document.getElementById('calendar');
    this.calendar = new Calendar(this.calendarEl, {
      initialView: 'dayGridMonth', // Set default view to month grid
      events: [ // Replace with your event data source (array of objects)
        { title: 'Event 1', start: '2024-06-10' },
        { title: 'Event 2', start: '2024-06-17' }
      ],
      plugins:[dayGridPlugin],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      buttonText: {
        today: 'Today',
        month: 'Month',
        week: 'Week',
        day: 'Day'
      },
      editable: true, // Allow event dragging and resizing (optional)
      eventClick: (info:any) => { // Handle event click (optional)
        console.log('Event clicked:', info.event);
      }
    });
    this.calendar.render();
  }
}