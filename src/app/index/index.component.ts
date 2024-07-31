import { Component,OnInit } from '@angular/core';
import { PostService,Post } from '../post.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent  implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getArticles().subscribe(data => {
      this.posts = data;
    });
  }
}
