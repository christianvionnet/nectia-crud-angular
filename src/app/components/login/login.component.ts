import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup
  loginError: string = null

  constructor(private authService: AuthService,
    private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.login(this.loginForm.value)
      .then(response => {
        this.router.navigate([""])
      })
      .catch(error => {
        if (error.code === "auth/wrong-password") {
          this.loginError = "Wrong password"
        }
        if (error.code === "auth/user-not-found") {
          this.loginError = "Wrong email"
        }
        if (error.code === "auth/too-many-requests") {
          this.loginError = "Access temporarily disabled. Too many failed login attempts"
        }
      })
  }


  onClickGoogle() {
    try {
      this.authService.loginGoogle()
      this.router.navigate([""])
    } catch (error) {
      console.log(error)
    }
  }

  onClickGithub() {
    try {
      this.authService.loginGithub()
      this.router.navigate([""])
    } catch (error) {
      console.log(error)
    }
  }

}
