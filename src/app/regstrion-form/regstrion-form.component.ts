import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-regstrion-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './regstrion-form.component.html',
  styleUrl: './regstrion-form.component.css'
})
export class RegstrionFormComponent {

  Regform! : FormGroup;


  constructor(private fb:FormBuilder) {}

ngOnInit(){
  this.Regform = this.fb.group({
    UserName :['',Validators.required],
    FirstName :['',Validators.required],
    Email:['',Validators.required],
    Address:['',Validators.required],
    District:['',Validators.required],
    Gender:['',Validators.required]
  });
}

formSubmitted= false;
Register(formdata:FormGroup)
{
  debugger;
  if(formdata.valid)
    {
      console.log(this.Regform.value);
      
      alert("Data is Sucessfully: insert");

      this.Regform.reset();
      this.formSubmitted = true;
    }
    else
    {
      alert ("Pls Fill the Data");
    }
}

}
