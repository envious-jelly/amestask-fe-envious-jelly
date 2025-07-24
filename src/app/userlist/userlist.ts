import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'app-userlist',
  imports: [CommonModule, FormsModule, RouterLink, MessageModule, Toast],
  providers: [MessageService],
  templateUrl: './userlist.html',
  styleUrl: './userlist.css'
})
export class Userlist {
  title="Seznam uporabnikov";

  users:any=[];
  search_users:any=[];
  search_term="";

  loading:boolean=false;

  APIURL="http://localhost:8000/"; // python FastApi

  constructor(private http:HttpClient, private messageService: MessageService){}

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
    if (rez === undefined || rez.length == 0) {
      this.messageService.add({
        severity: 'info',
        summary: 'Rezultati iskanja',
        detail: 'Prazno',
        life: 3000
      });
    }
    else {
      this.messageService.add({
        severity: 'success',
        summary: 'Rezultati iskanja',
        detail: 'Posodobljeno!',
        life: 3000
      });
    }
  }

  ngOnInit() { // init
    this.read_all_users();
  }

}
