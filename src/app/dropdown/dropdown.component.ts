import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {

  fb = inject(FormBuilder);
  http  = inject(HttpClient);

  form!: FormGroup;

  countries:any[] = [];
  states:any[] = [];
  cities:any[] = [];

  
  ngOnInit() {
            this.form = this.fb.group({
            countery : [null,Validators.required],
            state: [null,Validators.required],
            city: [null,Validators.required]
            //city : new FormControl("---select----")
          });
        debugger;
          // Load countries on init
    this.http.get<any[]>('https://localhost:44377/api/Login/countries')
    .subscribe(data => this.countries = data);

  // When country changes, load states

  debugger;
  this.form.get('country')?.valueChanges.subscribe(countryId => {
    if (countryId) 
    {
      this.http.get<any[]>(`https://localhost:44377/api/Login/states/${countryId}`)
        .subscribe(data => {
          this.states = data;
          this.cities = [];
          this.form.patchValue({ state: null, city: null });
        });
    } 
    else 
    {
      this.states = [];
      this.cities = [];
      this.form.patchValue({ state: null, city: null });
    }
  });

  // When state changes, load cities

  debugger;
  this.form.get('state')?.valueChanges.subscribe(stateId => {
    if (stateId) 
    {
      this.http.get<any[]>(`https://localhost:44377/api/Login/cities/${stateId}`)
        .subscribe(data => {
          this.cities = data;
          this.form.patchValue({ city: null });
        });
    } else {
      this.cities = [];
      this.form.patchValue({ city: null });
    }
  });
  
  }

  onSubmit(){
    debugger;
    console.log(this.form.value);
  }
}
