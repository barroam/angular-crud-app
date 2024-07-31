import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { PostService,Post } from '../post.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-create-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-edit.component.html',
  styleUrl: './create-edit.component.css'
})
export class CreateEditComponent implements OnInit {
  post: Post = { title: '', body: '' };
  isEdit = false;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.postService.getArticle(+id).subscribe(data => {
        this.post = data;
      });
    }
  }

  save(): void {
    if (this.isEdit) {
      this.postService.updateArticle(this.post.id!, this.post).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.postService.createArticle(this.post).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
