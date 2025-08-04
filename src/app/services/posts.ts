import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../pages/post/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostServise {
  private apiUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  addPost(post: Omit<Post, 'id'>): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post);
  }

  delete(id : number):Observable <Post>{
    return this.http.delete<Post>(`${this.apiUrl}/${id}`)
  }

  updatePost(id: number,post : Post):Observable <Post>{
    return this.http.put<Post>(`${this.apiUrl}/${id}`,post)
  }
}
