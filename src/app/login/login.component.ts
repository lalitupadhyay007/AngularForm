import { CommonModule, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule, httpResource } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule,HttpClientModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  MyLogin  = "Login Form";


  loginForm: FormGroup;
  loginError: string = '';
  Loginlist: any[] = [];

  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router: Router = inject(Router)


  constructor() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  onLogin()
  {
    debugger;

    if (this.loginForm.invalid) 
      {
      this.loginForm.markAllAsTouched();
      return;
    }

    const credentials = {
      userId: this.loginForm.value.username,
      e_Password: this.loginForm.value.password
    };

    debugger;

    this.http.post('https://localhost:44377/api/Login',credentials).subscribe({
      next: (user: any) => {
        if (user)
        {
          debugger;
          localStorage.setItem('user', JSON.stringify(user));
          //this.router.navigate(['/dashboard']);
          this.router.navigate(['Home']);
          
          alert("Login is Sucesfully");
          return;
        }
        else
        {
          this.loginError = 'Invalid username or password.';
        }
      },
      error: () => {
        this.loginError = 'Error connecting to login service.';
      }
    });

  }
}
