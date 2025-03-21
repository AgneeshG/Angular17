import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskFormComponent, TaskListComponent, FormsModule, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'My Task List';
  taskList:string[]=[];

  ngOnInit(): void {
    if(localStorage.getItem('my_tasks')){
      this.taskList = JSON.parse(localStorage.getItem('my_tasks'))
    }
  }
}
