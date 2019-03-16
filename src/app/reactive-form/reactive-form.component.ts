import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.sass']
})
export class ReactiveFormComponent implements OnInit {

  genders = [ 'male', 'female'];
  

  signupForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit( ) {
    // this.signupForm = new FormGroup({
    //   'username': new FormControl(null, [Validators.required, Validators.minLength(3)] ),
    //   'email' : new FormControl(null, [Validators.required, Validators.email ] ),
    //   'gender' : new FormControl('male')
    // });
    this.signupForm = this.fb.group({
      userData : this.fb.group({ 
        username : [null, [Validators.required, Validators.minLength(3)] ],
        email : [null, [Validators.required, Validators.email] ],
      }),
      
      gender : ['male' ],
      emailsList : this.fb.array([])
    })
  }

  get userData(){
    return this.signupForm.get('userData');
  }

  get username(){
   // let userGroup = <FormGroup>this.userData;
    return this.userData.get('username');
  }
  get email(){
    return this.userData.get('email');
  }

  get emailsList(){
    return this.signupForm.get('emailsList') as FormArray;
  }

  addEmails(){
    let control = new FormControl(null, Validators.required);
    //let control = this.fb.group({ emails : [null, Validators.required]});
   //(<FormArray>this.signupForm.get('emailsList')).push(control);
   this.emailsList.push(control);
  }

  onSubmit( ){
    console.log( this.signupForm );
    //console.log(this.userData);
  }

  
}
