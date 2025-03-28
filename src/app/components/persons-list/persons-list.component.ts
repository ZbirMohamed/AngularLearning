import { Component, computed } from '@angular/core';
import { Persone } from '../../models/Persone.module';
import { PersonsService } from '../../services/persons.service';

@Component({
  selector: 'app-persons-list',
  imports: [],
  templateUrl: './persons-list.component.html',
  styleUrl: './persons-list.component.css'
})
export class PersonsListComponent {
  persons = computed<Persone[]>(()=>this.personService.getAllProducys());

  constructor(private personService: PersonsService) {
    
  }

  select(persone:Persone){
   this.personService.select(persone);   
  }

}
