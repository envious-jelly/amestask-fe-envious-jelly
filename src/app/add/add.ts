import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'app-add',
  imports: [CommonModule, FormsModule, Toast],
  providers: [MessageService],
  templateUrl: './add.html',
  styleUrl: './add.css'
})
export class Add {

  APIURL="http://localhost:8000/"; // python FastApi

  constructor(private http:HttpClient, private messageService: MessageService){} 

  create_user(body:any) {
    const headers = { 'Content-Type': 'application/json', 'My-Custom-Header': 'foobar' };
    this.http.post(this.APIURL+"users", body, { headers })
    .subscribe({
      next: (rez: any) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Operacija uspešna',
          detail: 'Uporabnik @' + body.id +' je bil uspešno dodan!',
          life: 3000
        });
      },
      error: (err: Error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Operacija neuspešna',
          detail: 'Napaka: '+err.message.split('/:')[1],
          life: 3000
        });
      }
    });
  }

  create_task(body:any) {
    const headers = { 'Content-Type': 'application/json', 'My-Custom-Header': 'foobar' };
    this.http.post(this.APIURL+"tasks", body, { headers })
    .subscribe({
      next: (rez: any) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Operacija uspešna',
          detail: 'Naloga "' + body.title +'" je bila uspešno dodana!',
          life: 3000
        });
      },
      error: (err: Error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Operacija neuspešna',
          detail: 'Napaka: '+err.message.split('/:')[1],
          life: 3000
        });
      }
    });
  }

  create_comment(body:any) {
    const headers = { 'Content-Type': 'application/json', 'My-Custom-Header': 'foobar' };
    this.http.post(this.APIURL+"comments", body, { headers })
    .subscribe({
      next: (rez: any) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Operacija uspešna',
          detail: 'Komentar je bil uspešno dodan!',
          life: 3000
        });
      },
      error: (err: Error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Operacija neuspešna',
          detail: 'Napaka: '+err.message.split('/:')[1],
          life: 3000
        });
      }
    });
  }

}
