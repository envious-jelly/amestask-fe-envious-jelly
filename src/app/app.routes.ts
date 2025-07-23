import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Userlist } from './userlist/userlist';
import { Tasklist } from './tasklist/tasklist';
import { User } from './user/user';
import { Add } from './add/add';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
     {
        path: 'user/:id',
        component: User
    },
    {
        path: 'userlist',
        component: Userlist
    },
    {
        path: 'tasklist',
        component: Tasklist
    },
    {
        path: 'add',
        component: Add
    },
    {
        path: '**',
        redirectTo: ''
    }
];

