import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PostService , Post } from '../post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit {
  post: Post | undefined;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.postService.getArticle(+id).subscribe(data => {
        this.post = data;
      });
    }
  }

  deletePost(): void {
    if (this.post?.id) {
      this.postService.deleteArticle(this.post.id).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
