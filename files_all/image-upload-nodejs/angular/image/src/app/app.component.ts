import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponentOnInit{
  images:any
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    
  }

  selectImage(event:any){
    if(event.target.files.length>0){
      const file = event.target.files[0]
      this.images = file;
    }
  }

  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.images);

    this.http.post<any>('http://localhost:3000/file', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}


// -.- 
// -.--
// -.-.
