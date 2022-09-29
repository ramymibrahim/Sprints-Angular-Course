import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;
  user: any = {
    username: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.isLoading = true;
    this.authService.login(this.user.username, this.user.password).subscribe(
      (data) => {
        this.authService.saveToken(data);
        this.isLoading = false;
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
        alert('Please enter a valid username or password');
        this.isLoading = false;
      }
    );
  }
}
