import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post {
  id?: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:3001/posts'; // Point vers json-server
  constructor(private http: HttpClient) { }
  getArticles(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

// Dans votre service
getArticle(id: number): Observable<Post> {
  return this.http.get<Post>(`${this.apiUrl}/${id}`);
}


  createArticle(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post);
  }

  updateArticle(id: number, post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/${id}`, post);
  }

  deleteArticle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
