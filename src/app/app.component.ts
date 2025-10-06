import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { MatDialogModule, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
    standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    MatDialogModule,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';


}
