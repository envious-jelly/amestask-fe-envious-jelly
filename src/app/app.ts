import { AfterViewInit, Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HttpClient, provideHttpClient } from '@angular/common/http';

provideHttpClient();

@Component({
  selector: 'app-root',
  imports: [RouterLink, CommonModule, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ames_angular_ui');

}

