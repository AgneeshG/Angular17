import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-register',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  roles = [
    { value: "hr", label: "HR" },
    { value: "manager", label: "Manager" },
    { value: "developer", label: "Developer" },
    { value: "qa", label: "QA" },
    { value: "designer", label: "Designer" },
  ];
  platforms = [
    { value: "html", label: "HTML" },
    { value: "js", label: "JS" },
    { value: "css", label: "CSS" },
    { value: "node", label: "Node" },
    { value: "java", label: "Java" },
    { value: "php", label: "PHP" }
  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl(null,
        [
          Validators.required,
          this.validateEmail.bind(this)
        ],
        [this.validateEmailExist.bind(this)]
      ),
      username: new FormControl('',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.pattern(/^[a-zA-Z0-9_]*$/)
        ],
        [this.validateUsernameExist.bind(this)]
      ),
      mobile: new FormControl(null,
        [
          Validators.required,
          Validators.pattern(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/)
        ]
      ),
      password: new FormControl(null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20)
        ]
      ),
      confirmPassword: new FormControl(null, [
        Validators.required,
        this.validateConfirmPassword.bind(this)
      ]),
      role: new FormControl('', [
        Validators.required
      ]),
      platforms: new FormArray(
        [],
        [Validators.required]
      ),
      gender: new FormControl(null, [
        Validators.required
      ]),
      aboutyou: new FormControl(null, [
        Validators.required
      ]),
      termsCondition: new FormControl(false, [
        Validators.requiredTrue
      ])
    });

    this.signupForm.get('password').valueChanges.subscribe(() => {
      this.signupForm.get('confirmPassword').updateValueAndValidity({ onlySelf: true });
    });
  }

  onSubmit() {
    this.signupForm.markAllAsTouched();
    console.log(this.signupForm.value);
    const promise = new Promise<any>((resolve, reject) => {
      this.http.post(
        "http://localhost:3000/employee/create/",
        this.signupForm.value
      ).pipe(map(response => {
        if (response.hasOwnProperty('status')) {
          return response['status'];
        }
        return;
      })).subscribe(status => {
        if (status) {
          resolve({ 'usernameExist': status });
        } else {
          resolve(null);
        }
      });
    });
    return promise;
  }

  onCheckboxChange(e: any) {
    const platformCollection: FormArray = this.signupForm.get('platforms') as FormArray;
    if (e.target.checked) {
      platformCollection.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      platformCollection.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          platformCollection.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  validateEmail(formControl: FormControl): { [s: string]: boolean } {
    if ((!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formControl.value)) && formControl.value != null && formControl.value != '') {
      return { isEmailInvalid: true };
    } else {
      return;
    }
  }

  validateConfirmPassword(formControl: FormControl): { [s: string]: boolean } {
    const password = formControl.root.get('password');
    if (formControl.value != password?.value && formControl.value != null && formControl.value != '') {
      return { isPasswordNotMatched: true };
    } else {
      return;
    }
  }

  validateUsernameExist(control: FormControl): Promise<any> | Observable<any> {
    if (control && control.value) {
      const promise = new Promise<any>((resolve, reject) => {
        this.http.post(
          "http://localhost:3000/employee/validate-username/",
          { username: control.value }
        ).pipe(map(response => {
          if (response.hasOwnProperty('status')) {
            return response['status'];
          }
          return;
        })).subscribe(status => {
          if (status) {
            resolve({ 'usernameExist': status });
          } else {
            resolve(null);
          }
        });
      });
      return promise;
    } else {
      return
    }
  }

  validateEmailExist(control: FormControl): Promise<any> | Observable<any> {
    if (control && control.value) {
      const promise = new Promise<any>((resolve, reject) => {
        this.http.post(
          "http://localhost:3000/employee/validate-email/",
          { email: control.value }
        ).subscribe(response => {
          console.log(response);
          if (response['status']) {
            resolve({ 'emailExist': response['status'] });
          } else {
            resolve(null);
          }
        });
      });
      return promise;
    } else {
      return
    }
  }
}