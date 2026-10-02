import { Component } from '@angular/core';
import { Profilo } from './profilo/profilo';

@Component({
  selector: 'app-root',
  imports: [Profilo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}