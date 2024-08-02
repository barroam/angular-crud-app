import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export interface Post {
  id?: string;
  title: string;
  body: string;
}

export interface Comment {
  id?: string;
  postId: string;
name: string;
email:string;
body:string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
//LIEN DE JSONPLACEHOLDER
  /*https://jsonplaceholder.typicode.com/posts */
   // private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

//LIEN PERSONNEL
  /*'http://localhost:3002/posts' */
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getArticles(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getArticle(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  createArticle(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post).pipe(
      catchError(this.handleError)
    );
  }

  updateArticle(id: string, post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/${id}`, post).pipe(
      catchError(this.handleError)
    );
  }

  deleteArticle(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }
    //LIEN PERSONNEL
  /* `http://localhost:3002/comments?postId=${postId}` */

    //LIEN DU PLACEHOLDER
  /* https://jsonplaceholder.typicode.com/comments?postId=${postId}`*/
  getCommentsForPost(postId: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong. Please try again later.'));
  }
}
