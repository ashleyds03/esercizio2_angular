import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-profilo',
  imports: [MatButtonModule],
  templateUrl: './profilo.html',
  styleUrl: './profilo.css'
})
export class Profilo {
  nome = 'Ashley';
  ruoloIniziale = 'Studentessa Cybersecurity';
  ruolo = this.ruoloIniziale;
  eta = 23;
  immagine = 'https://i.pinimg.com/1200x/b1/48/8f/b1488fdac4488b4a116c6964c1735f60.jpg';
  larghezzaImmagine = 150;
  testoPulsante = 'Cambia stato';
  stato = 'Offline';
  pulsanteDisabilitato = false;
  numeroClick = 0;

  cambiaStato() {
    this.stato = this.stato === 'Offline' ? 'Online' : 'Offline';
    this.numeroClick++;
  }

  cambiaRuolo() {
    this.ruolo = this.ruolo === 'Studentessa Cybersecurity' ? 'Frontend Developer': 'Studentessa Cybersecurity';
  }
}