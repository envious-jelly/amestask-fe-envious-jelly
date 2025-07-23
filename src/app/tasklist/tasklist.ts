import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tasklist',
  imports: [CommonModule],
  templateUrl: './tasklist.html',
  styleUrl: './tasklist.css'
})
export class Tasklist {
  title="Seznam nalog";
 
  tasks:any=[];

  APIURL="http://localhost:8000/"; // python FastApi

  constructor(private http:HttpClient){}

  read_all_tasks() {
    this.http.get(this.APIURL+"tasks").subscribe((rez) => {
      this.tasks = rez;
    });
  }

  ngOnInit() { // init
    this.read_all_tasks();
  }
}
