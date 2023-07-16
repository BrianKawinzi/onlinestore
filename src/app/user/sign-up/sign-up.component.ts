import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up', // Updated selector name to match the component name
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent { // Updated class name to match the component name
  user = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    if (this.user.password !== this.user.confirmPassword) {
      // Add error handling for password mismatch
      alert("Passwords do not match!");
      return;
    }

    // Here, you can implement the code to handle the sign-up process
    // For example, sending the data to the backend or performing any other required actions

    // Redirect to the 'aboutus' route after successful sign-up
    this.router.navigate(['/aboutus']); // Fixed the route path to be a string, not a regular expression or an array
  }
}
