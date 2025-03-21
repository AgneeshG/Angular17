import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// @Injectable({
//   providedIn: 'root',
// })

interface IformData {
  name:""
  email:""
  profilePhoto:File
  password:""
}



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NavbarComponent, RouterModule , HttpClientModule, FormsModule, CommonModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  formData = {
    name:"",
    email:"",
    profilePhoto:null,
    password:""
  }
  selectedFile:File | null = null;
  submit=false
  errorMessage = ""
  loading=false
  // router: any;
  constructor(private http:HttpClient,private router:Router){ 
    // this.router = router
  }
  
  ngOnInit(): void {
    this.canAuthenticate()
  }

  register(name:string, email:string, password:string,profilePhoto:File | null){
    //send data to register api (firebase)
    return this.http.post<{idToken:string}>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBHbFJxrjMX7XvHR9SIBj9OPVlIEchfLZY',{displayName:name,email:email, password:password,profilePhoto});
  }
// 
  storeToken(token:string){
    sessionStorage.setItem('token',token)
  }

  canAuthenticate(){
    if (this.isAuthenticated()) {
      //redirect to dashboard
      this.router.navigate(['/dashboard']);
    }
  }
  isAuthenticated():boolean{
    if (sessionStorage.getItem('token')!==null) {
        return true;
    }
    return false;
  }

  // canAccess(){
  //   if(this.isAuthenticated()){
  //     this.router.navigate(['/dashboard'])
  //   }
  // }

  // onFileSelected(event: any) {
  //   this.selectedFile = event.target.files[0];
  //   alert("file upload success")
  //   if (this.selectedFile!.size > 1048576) { // Example: Max 1MB
  //     alert('File size exceeds limit (1MB)');
  //     this.selectedFile = null;
  //   } else if (!['image/jpeg', 'image/png'].includes(this.selectedFile!.type)) {
  //     alert('Invalid file type. Please select a JPEG or PNG image.');
  //     this.selectedFile = null;
  //   }
  // }
  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit():void{
    this.loading = true
    
    // if (form.valid && this.selectedFile) {
    //   const formData = new FormData();
    //   formData.append('photo', this.selectedFile, this.selectedFile.name);
    // }

    // call register service
    this.register(this.formData.name, this.formData.email, this.formData.password, this.formData.profilePhoto)
    .subscribe({
      next:data=>{
        // store token from response data
        this.storeToken(data.idToken);
        console.log('Register idToken is '+data.idToken); 
        this.canAuthenticate()
      },
      error:data=>{
        if(data.error.error.message=="INVALID_EMAIL"){
          this.errorMessage = "Invalid Email!"
        }
        // else if(data.error.error.message="EMAIL_EXISTS"){
        //   this.errorMessage = "Already Email Exists!"
        // }
        else{
          this.errorMessage = "Unknown error occoured when creating this account"
        }
      }
    }).add(()=>{
      this.loading = false
      console.log("Register completed!");

    })
  }
}