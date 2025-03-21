import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  @Input('tasks') taskList:string[] = []
  
  constructor(){ }
  ngOnInit(): void {
    
  }
  removeTask(index:number){
    this.taskList.splice(index, 1)
    localStorage.getItem(JSON.stringify(this.taskList))
  }
}
