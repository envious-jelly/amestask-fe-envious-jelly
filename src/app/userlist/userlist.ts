import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-userlist',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './userlist.html',
  styleUrl: './userlist.css'
})
export class Userlist implements AfterViewInit {
  title="Seznam uporabnikov";

  users:any=[];
  search_users:any=[];
  search_term="";

  APIURL="http://localhost:8000/"; // python FastApi

  constructor(private http:HttpClient){}

  read_all_users() {
    this.http.get(this.APIURL+"users").subscribe((rez) => {
      this.users = rez;
    });
  }

  search() {
    let rez: any=[];
    this.users.forEach((u:any) => {
      if (u.id.includes(this.search_term) || u.name.includes(this.search_term)) {
        rez.push(u);
      }
    });
    this.search_users=rez;
    // alert
  }

  ngOnInit() { // init
    this.read_all_users();
  }

  ngAfterViewInit() {
    fromEvent(document.getElementById('search')!, 'click').subscribe((rez) => {
      this.search();
    });
  }

}
