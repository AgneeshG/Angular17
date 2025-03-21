import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-form-one',
  standalone: true,
  imports: [ FormsModule, CommonModule ],
  templateUrl: './form-one.component.html',
  styleUrl: './form-one.component.css'
})
export class FormOneComponent implements OnInit {
  countryName = ''
  countryList:string[] = ['India','Russia','America','Canada','Japan']

  countryList2: Country[] = [
    new Country('1','India'),
    new Country('2','Russia'),
    new Country('3','England'),
    new Country('4','USA')
  ];

  contact!: Contact;

  ngOnInit(): void {
    this.contact = {
      firstName: '',
      lastName: 'kumar',
      email: 'krishna@gmail.com',
      gender: 'male',
      isMarried: true,
      country:'1',
      address:{
        street: 'park street',
        city: 'pollachi',
        pincode: '642105',
    }
  }
}
  onSubmit(form:NgForm){
    console.log(form);
  }
}

class Country{
  id:string;
  name:string;
  constructor(id:string, name:string){
    this.id = id
    this.name = name
  }
}

class Contact{
  firstName!: string;
  lastName!: string;
  email!: string;
  gender!: string;
  isMarried!: boolean;
  country!:string;
  address!:{
    street: string;
    city: string;
    pincode: string;
  }
}

// @NgModule({
//   declarations: [],
//   imports: []
// })
// export class AppModule{}




