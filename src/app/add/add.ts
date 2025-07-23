import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  imports: [CommonModule, FormsModule],
  templateUrl: './add.html',
  styleUrl: './add.css'
})
export class Add {

  APIURL="http://localhost:8000/"; // python FastApi

  constructor(private http:HttpClient){}

  create_user(body:NgForm) {
    const headers = { 'Content-Type': 'application/json', 'My-Custom-Header': 'foobar' };
    this.http.post(this.APIURL+"users", body, { headers }).subscribe((rez) => {
      alert(rez); // TODO: toast
    });
    console.log(body);
  }

  create_task(body:NgForm) {
    const headers = { 'Content-Type': 'application/json', 'My-Custom-Header': 'foobar' };
    this.http.post(this.APIURL+"tasks", body, { headers }).subscribe((rez) => {
      alert(rez); // TODO: toast
    });
    console.log(body);
  }

  create_comment(body:NgForm) {
    const headers = { 'Content-Type': 'application/json', 'My-Custom-Header': 'foobar' };
    this.http.post(this.APIURL+"comments", body, { headers }).subscribe((rez) => {
      alert(rez); // TODO: toast
    });
    console.log(body);
  }

}
