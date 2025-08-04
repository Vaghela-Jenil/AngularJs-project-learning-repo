import { Component, inject, OnInit } from '@angular/core';
import { AuthServiseTs } from '../../services/auth.servise.ts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logincomponent',
  imports: [],
  templateUrl: './logincomponent.html',
  styleUrl: './logincomponent.css'
})
export class Logincomponent implements OnInit {
    auth = inject(AuthServiseTs)
    router = inject(Router);

    ngOnInit(): void {
      if(this.auth.check()){
        this.router.navigate(['/todo'])
      }
    }

    login(){
      this.auth.login();
      this.router.navigate(['/todo'])
    }
}
