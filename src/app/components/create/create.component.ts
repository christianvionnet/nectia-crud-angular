import { Component, OnInit } from '@angular/core';

import { PostService } from 'src/app/post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements OnInit {

  public postForm: FormGroup

  constructor(
    public postService: PostService,
    public formBuilder: FormBuilder,
    public router: Router,
    private toastr: ToastrService
  ) {
    this.postForm = this.formBuilder.group({
      fname: [""],
      lname: [""],
      email: ["", Validators.email],
      gender: [""]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.postService.createPost(this.postForm.value)
    this.router.navigate([""])
    this.toastr.success("New client was added", "Success!", {
      positionClass: "toast-bottom-right"
    })
  }
}
