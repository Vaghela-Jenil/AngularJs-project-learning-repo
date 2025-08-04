import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighLight } from '../../directives/highlight';
import { UppercaseWithDotsPipe } from '../../pipes/uppercase-with-dots-pipe';
import { AuthServiseTs } from '../../services/auth.servise.ts';
import { Router } from '@angular/router';

interface Task {
  title: string;
  completed: boolean;
  editing: boolean;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.html',
  styleUrls: ['./todo.css'],
  imports: [FormsModule, CommonModule, HighLight, UppercaseWithDotsPipe],
})

export class Todo implements OnInit {
  @ViewChild('taskInput') taskInputRef!: ElementRef;
  newTask: string = '';
  tasks: Task[] = [];

  auth = inject(AuthServiseTs);
  router = inject(Router);

  logout(){
    this.router.navigate(['/login']);
    return this.auth.logOut(); 
  }

  ngOnInit(): void {
    this.loadTask();
  }

  addTask() {
    const title = this.newTask.trim();
    if (title) {
      this.tasks.push({ title, completed: false, editing: false });
      this.newTask = '';
      this.saveTasks();
    }
    setTimeout(() => this.taskInputRef.nativeElement.focus());
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.saveTasks();
  }

  editTask(task: Task) {
    task.editing = !task.editing;
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  loadTask() {
    const data = localStorage.getItem('tasks');
    if (data) {
      this.tasks = JSON.parse(data)
    }
  }

}
