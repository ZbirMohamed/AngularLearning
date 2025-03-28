import { Component, computed, signal } from '@angular/core';
import { Persone } from './models/Persone.module';
import { PersonsListComponent } from './components/persons-list/persons-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddPersonComponent } from "./components/add-person/add-person.component";
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tpAngular';

  list = signal<Persone[]>([
    {
      id: 1,
      nom: 'Dupont',
      prenom: 'Jean',
      age: 35,
      mature: true,
      salaire: 3000,
    },
    {
      id: 2,
      nom: 'Martin',
      prenom: 'Marie',
      age: 28,
      mature: true,
      salaire: 2500,
    },
    {
      id: 3,
      nom: 'Lemoine',
      prenom: 'Paul',
      age: 50,
      mature: true,
      salaire: 4000,
    },
    {
      id: 4,
      nom: 'Leclerc',
      prenom: 'Sophie',
      age: 22,
      mature: false,
      salaire: 1500,
    },
    {
      id: 5,
      nom: 'Durand',
      prenom: 'Lucie',
      age: 40,
      mature: true,
      salaire: 3500,
    },
  ]);

  

 
  
}
