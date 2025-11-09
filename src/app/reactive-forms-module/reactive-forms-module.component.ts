import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-reactive-forms-module',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-forms-module.component.html',
  styleUrl: './reactive-forms-module.component.css'
})
export class ReactiveFormsModuleComponent {

  regForm!: FormGroup;


  constructor(private fb:FormBuilder) {
    
  }

  ngOnInit(){
    debugger;
//this.regForm = new FormGroup({
    this.regForm = this.fb.group({

      Email: ['', Validators.required],
      Password: ['', Validators.required],
      Address: ['', Validators.required],
      FullAddress: ['', Validators.required],
      City: ['', Validators.required],
      State: ['', Validators.required],
      Pincode: ['', Validators.required],
      chek: [false, Validators.requiredTrue]
});
  }
  
  Register(formdata:FormGroup){
    debugger;
    if(formdata.valid)
    {
      console.log(this.regForm.value);
    }
    else
    {
      formdata.markAllAsTouched();
    }

    //console.log(this.regForm.value);
  }

}
