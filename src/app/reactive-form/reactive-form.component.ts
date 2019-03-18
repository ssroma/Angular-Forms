import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.sass']
})
export class ReactiveFormComponent implements OnInit {

  genders = [ 'male', 'female'];
  forbiddenNames = [ 'Anthony', 'Andrade' ];

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
        username : [
          null, 
          [Validators.required, Validators.minLength(3), this.forbibbenName.bind(this) ] 
        ],
        email : [
          null, 
          [Validators.required, Validators.email],
          this.forbidenEmail
        ],
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

  // costumized validator 
  forbibbenName(control: AbstractControl){
    if (this.forbiddenNames.indexOf(control.value) !== -1){
      return { isForbidden: `The name : "${control.value}" is Forbidden` }
    }

    return null;
  }

  // Sinc test
  forbidenEmail(control: AbstractControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test@gmail.com"){
          resolve({'emailIsForbidden': control.value});
        }else{
          resolve(null);
        }
      }, 2000)
    });
    return promise;
  }


  addEmails(){
    let control = new FormControl(null, Validators.required);
   this.emailsList.push(control);
  }

  reset(){
    console.log( this.signupForm.value );
    
  }

  onSubmit( ){
    this.signupForm.reset({
      userData : {
        username : '',
        email: ''
      },
      gender: 'male',
      emailsList: ''
    });
  }

 
  

  
}
