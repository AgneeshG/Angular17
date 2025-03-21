import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
@Input('tasks') taskList:string[]= []
newTask:string='';

addTask(){
  this.taskList.unshift(this.newTask)
  localStorage.setItem('my_tasks',JSON.stringify(this.taskList))
  this.newTask=''
}


}
