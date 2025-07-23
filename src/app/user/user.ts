import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  title="Podrobnosti uporabnika";

  user_id:string="";

  user_data:any="";

  APIURL="http://localhost:8000/"; // python FastApi

  constructor(private route:ActivatedRoute, private http:HttpClient) {}

  read_user() {
    this.http.get(this.APIURL+"users/"+this.user_id).subscribe((rez) => {
      this.user_data = rez;
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params:any) => {
      this.user_id=params['id'];
    });

    this.read_user();

  }

}
