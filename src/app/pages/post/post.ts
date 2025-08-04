import { Component, ElementRef, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostServise } from '../../services/posts';
import { ViewChild } from '@angular/core';

export interface Post {
  id: number;
  title: string;
}

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post.html',
  styleUrls: ['./post.css']
})
export class PostComponent implements OnInit {
  constructor() {
    console.log("Constructure called");
  }

  posts: Post[] = [];
  newTitle = '';
  loading = signal(false);
  error = '';
  @ViewChild('updateInput') updateInput!: ElementRef;

  postService = inject(PostServise);

  ngOnInit(): void {
    this.fetchPosts();
    console.log('🟢 Component Initialized');
  }

  fetchPosts() {
    this.loading.set(true)
    this.error = '';
    console.log('🟡 Fetching posts...');

    this.postService.getPosts().subscribe({
      next: (data: Post[]) => {
        console.log('✅ Posts fetched:', data);
        this.posts = data;
        this.loading.set(false)
      },
      error: (err) => {
        console.error('❌ Failed to fetch posts:', err);
        this.error = 'Failed to load Posts';
        this.loading.set(false)
      }
    });
  }


  addPost() {
    const trimmed = this.newTitle.trim();
    if (!trimmed) return;

    const postData = { title: trimmed };

    this.postService.addPost(postData).subscribe({
      next: (newPost) => {
        console.log('✅ Post added:', newPost);
        this.newTitle = '';
        this.fetchPosts(); // or this.posts.unshift(newPost); if avoiding refetch
      },
      error: (err) => {
        console.error('❌ Failed to add post:', err);
        alert('Failed to add post');
      }
    });

  }

  deletePost(id: number) {
    const postId = id;
    this.postService.delete(postId).subscribe({
      next: () => {
        console.log('post deleted ', id);
        this.fetchPosts()
      }
    })
  }

  // Track update text per post
updateText: { [id: number]: string } = {};

updatePost(id: number) {
  const trimmed = this.updateText[id]?.trim();
  if (!trimmed) return;

  const updatedata = { id, title: trimmed };

  this.postService.updatePost(id, updatedata).subscribe({
    next: () => {
      console.log("Post updated:", id);
      this.fetchPosts();
    },
    error: (err) => {
      console.error('Failed to update post', err);
    }
  });
}

}
