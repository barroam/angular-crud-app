import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PostService, Post ,Comment} from '../post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'] // Correction ici
})
export class ViewComponent implements OnInit {
  post: Post | undefined;

  comments: Comment[] = [];

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const postId = id; // Assurez-vous que postId est une chaîne
      this.postService.getArticle(postId).subscribe(data => {
        this.post = data;
        this.loadComments(postId); // Passez postId en tant que chaîne
      }, error => {
        console.error('An error occurred:', error);
      });
    }
  }

  loadComments(postId: string): void { // Accepter postId comme chaîne
    this.postService.getCommentsForPost(postId).subscribe(comments => {
      console.log('Comments received:', comments); // Debugging log
      this.comments = comments;
    }, error => {
      console.error('An error occurred:', error);
    });
  }

  deletePost(): void {
    if (this.post?.id) {
      this.postService.deleteArticle(this.post.id).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
