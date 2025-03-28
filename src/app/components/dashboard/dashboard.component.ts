import { Component, computed } from '@angular/core';
import { PersonsService } from '../../services/persons.service';
import { PersonsListComponent } from '../persons-list/persons-list.component';

@Component({
  selector: 'app-dashboard',
  imports: [PersonsListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  selected = computed<number>(()=> this.personeService.getAllProducys().filter( (p) => p.mature).length );
  
  computed = computed<number>(()=>this.personeService.getAllProducys()
  .filter((p)=>p.mature)
  .reduce((sum,current)=> sum + current.salaire, 0))
 
  constructor(private personeService: PersonsService){

  }

}
