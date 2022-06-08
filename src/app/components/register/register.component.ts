import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup
  registerError: string = null

  constructor(private authService: AuthService,
    private router: Router) {
    this.registerForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registerForm.value)
    this.authService.register(this.registerForm.value)
      .then(response => {
        console.log(response)
        this.router.navigate(["/login"])
      })
      .catch(error => {
        if (error.code === "auth/email-already-in-use") {
          this.registerError = "Email already in use"
        }
      })
  }

}
