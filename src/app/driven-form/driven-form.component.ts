import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { namespaceHTML } from '@angular/core/src/render3';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.sass']
})
export class DrivenFormComponent implements OnInit {

  @ViewChild('f') form: NgForm;

  info = {
    name: 'Sergio Roma',
    email: 'roma.sergio@gmail.com',
    secretInput: 'pet'
  }
  names = [ 'Sergio', 'Antonio', 'Marcio', 'Mariano', 'Roma', 'Santos', 'Andrade', 'Ronaldo'];
  secreateQuestions = [
    { value: 'pet', question: 'Your first Pet?' },
    { value: 'theacher', question: 'Your first teacher?' },
    { value: 'dob', question: 'Your place of birth?' },
    
  ]

  name: string;
  email: string;
  secret: string;
  suggestion = [];
  genders = ['male', 'female']

  constructor() { }

  ngOnInit() {
    //this.name = this.info.name;
    //this.email = this.info.email;
    this.secret = this.info.secretInput;

  }

  onSubmit( ){
    console.log( this.form.value );

    // console.log(` name: ${this.info.name}
    //               Email: ${this.info.email} 
    //               Secret: ${this.info.secretInput}`)
  }

  // onSubmit(form: NgForm){
  //   console.log( form );
  // }

  keyUpCheck( entered: string ){
    //console.log( entered.toUpperCase() );
    let newName = [];
    this.names.map((x) => {
      let nome = x.charAt(0);
      if( entered.toUpperCase() === nome ){
        return newName.push(x);
      }  
    })
    //console.log(newName)
    this.suggestion = newName;
  }

  populateTextArea(name: string){
    //console.log(name)
    this.name = name;
    this.suggestion.splice(0, this.suggestion.length);
  }


}
