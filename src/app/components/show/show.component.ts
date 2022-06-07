import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post.model';
import { PostService } from 'src/app/post.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

PostService

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  Posts: Post[]
  loading = true

  constructor(private postService: PostService,
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(response =>
      this.Posts = response.map(e => {
        this.loading = false
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Post)
        }
      })
    )
  }

  deleteRow = (post) => {
    this.postService.deletePost(post)
    this.toastr.error("Client was deleted", "Success!", {
      positionClass: "toast-bottom-right"
    })
  }

  onClick() {
    try {
      this.authService.logOut()
      this.router.navigate(["/login"])
    } catch (error) {
      console.log(error)
    }
  }

}
