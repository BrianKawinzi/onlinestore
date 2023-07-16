import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  onSubmit() {
    if (this.user.password !== this.user.confirmPassword) {
      //Add error handling for password mismatch
      alert("Passwords do not match!");
      return;
    }

    console.log('User Data:', this.user);
    //Reset the form after successful sign-up
    this.user = {
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

}
