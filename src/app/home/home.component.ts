import { CommonModule } from '@angular/common';
import { RecursiveAstVisitor } from '@angular/compiler';
import { Component } from '@angular/core';
import { DeferBlockBehavior } from '@angular/core/testing';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  Regform!: FormGroup;

  constructor(private fb: FormBuilder) {
    
  }

  ngOnInt(){
    this.Regform = this.fb.group({

      FName: ['', Validators.required],
      // LastName: ['', Validators.required],
      // Address: ['', Validators.required],
      // Gender: ['', Validators.required]

    });
  }

    onSubmit(formdata:FormGroup){
      debugger;
      console.log(this.Regform.value);
    }


}
