import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepicker, MatDatepickerInputEvent, MatDatepickerModule, MatYearView } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceChart } from '../../serviceChart/service.service';
import { HttpClient } from '@angular/common/http';
import { CalendarModule } from 'primeng/calendar';
import { MatNativeDateModule } from '@angular/material/core';
import moment from 'moment';
import { timeStamp } from 'console';

@Component({
  selector: 'app-calendar4',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatIconModule, MatNativeDateModule, FormsModule, ReactiveFormsModule, CalendarModule],
  templateUrl: './calendar4.component.html',
  styleUrl: './calendar4.component.css',
  providers: [provideNativeDateAdapter()]
})
export class Calendar4Component implements OnInit {
  // onYearSelected($event: MatDatepickerInputEvent<any,any>) {
  // throw new Error('Method not implemented.');
  // }
  events: any
  date2: Date | undefined
  calendarValue: Date | undefined
  showCalendarType = false
  viewQuarterlyCalendar = false
  viewMonthlyCalendar = false
  viewWeeklyCalendar = false
  viewDailyCalendar = false
  chartType:any

  year:any
  month:any

  inputField: any
  currentYear: any
  form: any;

  selectedButton: string = '';

  constructor(private sharedService: ServiceChart, private http: HttpClient) {

  }




  ngOnInit(): void {
    this.sharedService.data$.subscribe(selectedDate => this.events = selectedDate)
  }

  setValue(value:any) {
    this.sharedService.setData(value);
  }
  setYear(value:any){
    this.sharedService.setYear(value)
  }
  setMonth(value:any){
    this.sharedService.setMonth(value)
  }
  setType(value:any){
    this.sharedService.setType(value)
    console.log(value);
    
  }

  showCalendar(){
    this.showCalendarType = !this.showCalendarType
  }




  onYearSelected(normalizedYear: Date, datepicker: MatDatepicker<Date>) {
    this.viewDailyCalendar = false, this.viewWeeklyCalendar = false
    const ctrlValue = new Date();
    ctrlValue.setFullYear(normalizedYear.getFullYear());    
    this.year = ctrlValue.getFullYear()
    console.log("year value : ",this.year);
    
    datepicker.close();
    console.log(ctrlValue.getFullYear(),"---");  // For demonstration purposes
    this.setMonth(this.month); 
    this.setYear(this.year); 
    this.setType(this.chartType)
    this.viewQuarterlyCalendar = false
    this.viewMonthlyCalendar = false
  }

  onDateChange(event: any) {
    console.log('Date changed:', event.value);
    this.viewQuarterlyCalendar = false
    this.viewMonthlyCalendar = false
    this.viewWeeklyCalendar = false
    this.viewDailyCalendar = false
  }
  quarterly(){
    this.viewQuarterlyCalendar = !this.viewQuarterlyCalendar
    this.chartType = "quarter"
    this.month = 1
    this.showCalendarType = false; 
    this.viewDailyCalendar = false
    this.viewWeeklyCalendar = false
  }
  monthly(){
    this.viewMonthlyCalendar = !this.viewMonthlyCalendar
    this.chartType = "month"
    this.showCalendarType = false; 
    this.viewDailyCalendar = false
    this.viewWeeklyCalendar = false
    }
  weekly(){
    this.viewWeeklyCalendar = !this.viewWeeklyCalendar
    this.chartType = "week"
    this.showCalendarType = false; 
    this.viewQuarterlyCalendar = false
    this.viewMonthlyCalendar = false;
  }
  daily(){
    this.viewDailyCalendar = !this.viewDailyCalendar
    this.chartType = "day"
    this.showCalendarType = false; 
    this.viewQuarterlyCalendar = false
    this.viewMonthlyCalendar = false; }

  onMonthSelected(event: Date, datepicker: MatDatepicker<Date>) {
    console.log(`Selected month: ${event.getMonth() + 1}, Year: ${event.getFullYear()}`);
    this.year = event.getFullYear()
    this.month = event.getMonth() + 1    
    datepicker.close();
    this.setMonth(this.month); 
    this.setYear(this.year); 
    this.setType(this.chartType)
    this.viewDailyCalendar = false
    this.viewWeeklyCalendar = false
  }


  selectButton(button: string) {
    this.selectedButton = button;
  }
}

