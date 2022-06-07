import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public editForm: FormGroup
  postRef: any

  constructor(
    public postService: PostService,
    public formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.formBuilder.group({
      fname: [""],
      lname: [""],
      email: [""],
      gender: [""]
    })
  }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get("id")
    this.postService.getPostById(id).subscribe(response => {
      this.postRef = response
      this.editForm = this.formBuilder.group({
        fname: [this.postRef.fname],
        lname: [this.postRef.lname],
        email: [this.postRef.email],
        gender: [this.postRef.gender]
      })
    })
  }

  onSubmit() {
    const id = this.activeRoute.snapshot.paramMap.get("id")
    this.postService.updatePost(this.editForm.value, id)
    this.router.navigate([""])
  }

}
