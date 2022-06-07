import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post.model';
import { PostService } from 'src/app/post.service';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService
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

}
