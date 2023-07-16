import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //Add any logic or functionality for the login page here
  user = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    //simulate a simple login process
    if (this.user.email === 'test@example.com' && this.user.password === 'password') {
      //Successful login
      alert('Login successful');
      this.router.navigate(['/aboutus']);
    } else {
      //Failed login
      alert('Invalid credentials. Please try again.');
    }
  }

  onSignup() {
    this.router.navigate(['/signup']);
  }

}
