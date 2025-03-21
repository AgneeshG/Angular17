import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-form-one',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './form-one.component.html',
  styleUrl: './form-one.component.css'
})
export class FormOneComponent {
  contactForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('^[a-zA-Z]+$')]),
    lastName: new FormControl({
      value:'pratab',
      disabled: false
    }, [Validators.required, Validators.maxLength(15)]),
    email: new FormControl("",[Validators.required]),
    gender: new FormControl("",[Validators.requiredTrue]),
    isMarried: new FormControl({
      value: true,
      disabled: false
    }, [Validators.required]),
    country: new FormControl("",[Validators.required]),
    address: new FormGroup({
      street: new FormControl("",[Validators.required]),
      city: new FormControl("",[Validators.required]),
      pincode: new FormControl("",[Validators.required])
    }) 
  })

  get firstname(){
    return this.contactForm.get('firstName')
  }
  get lastname(){
    return this.contactForm.get('lastName')
  }
  get email(){
    return this.contactForm.get('email')
  }
  get gender(){
    return this.contactForm.get('gender')
  }
  get marriedstatus(){
    return this.contactForm.get('isMarried')
  }
  get country(){
    return this.contactForm.get('country')
  }
  get street(){
    return this.contactForm.get('address')?.get('street')
  }  
  get city(){
    return this.contactForm.get('address')?.get('city')
  }
  get pincode(){
    return this.contactForm.get('address')?.get('pincode')
  }



  onSubmit(){
    console.log(this.contactForm);
    
  }

  countryList: string[] = ['India','America','Canada','China','Ukrain']  
}



