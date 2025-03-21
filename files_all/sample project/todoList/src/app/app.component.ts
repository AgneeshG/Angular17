import { Component, inject, NgModule, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MasterService } from './Service/master.service';
import { ApiResponseModel, ITask, Task } from './model/task';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'todoList';

  taskObj: Task =  new Task()
  taskList:ITask[] = []

  masterService = inject(MasterService);

  ngOnInit(): void {
    this.loadAllask();
  }

  loadAllask(){
    this.masterService.getAllTaskList().subscribe((res: ApiResponseModel)=>{
      this.taskList = res.data;
    })
  }

  addTask(){
    this.masterService.addNewTask(this.taskObj).subscribe((res:ApiResponseModel)=>{
      if(res.result){
        alert('Task created success')
        this.loadAllask()
        this.taskObj = new Task()
      }
    },error=>{
      alert('API call error')    
    })
  }

  onEdit(){
    this.taskObj = item;
    setTimeout(() => {
      const dat = new Date(this.taskObj.dueDate)
      const day = ('0' + dat.getDate()).slice(-2)
      const month = ('0' + (dat.getMonth() +1 )).slice(-2)
      const today = dat.getFullYear() + '-' + (month) + '-' + (day)
      // (<HTMLInputElement>document.getElementById('textDate')).value = today
    }, 1000);
  }
}
