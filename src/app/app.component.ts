import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tpAngular';
  list = [
    { nom: 'Zbir', prenom: 'Mohamed Amine', age: 23 },
    { nom: 'Hanane', prenom: 'Salah', age: 24 },
    { nom: 'Zbir', prenom: 'Sadika', age: 18 },
    { nom: 'Zbir', prenom: 'Youssef', age: 25 },
  ];
}
