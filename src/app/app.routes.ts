import { Routes } from '@angular/router';
import { Todo } from './todo-app/todo/todo';
import { Logincomponent } from './login/logincomponent/logincomponent';
import { authGuard } from './guards/auth.guard';
import { PostComponent } from './pages/post/post';

export const routes: Routes = [
    {
        path:'',redirectTo:'login',
        pathMatch:'prefix',
    },
    {
        path:'login',
        component:Logincomponent,
    },
    {
        path:'todo',
        component:Todo,
        canActivate:[authGuard],
    },
    {
        path:'posts',
        component:PostComponent,
    },
    // {
    //     path:'**',
    //     redirectTo:'login',
    // }
];
