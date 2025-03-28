import { effect, Injectable, signal } from '@angular/core';
import { Persone } from '../models/Persone.module';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  personState = signal<Persone[]>([]);

  constructor() {
    effect(()=>{
      this.personState.set(
        [
          {id: 1,nom: 'Dupont',prenom: 'Jean',age: 35,mature: true,salaire: 3000},
          {id: 2,nom: 'Martin',prenom: 'Marie',age: 28,mature: true,salaire: 2500},
          {id: 3,nom: 'Lemoine',prenom: 'Paul',age: 50,mature: true,salaire: 4000},
          {id: 4,nom: 'Leclerc',prenom: 'Sophie',age: 22,mature: false,salaire: 1500},
          {id: 5,nom: 'Durand',prenom: 'Lucie',age: 40,mature: true,salaire: 3500},
        ]
      )
    });
   }
   
   public getAllProducys(){
    return this.personState();
   }
   
   public select(persone: Persone) {
    this.personState.update((staff) => 
      staff.map((s) =>
        s.id == persone.id ? { ...s, mature: !s.mature } : s
      )
    );
  }

  public deleteStaff(persone:Persone){
    this.personState.update(state=>
      state.filter( p=>
        p.id != persone.id
      )
    )
  }

  public saveStaff(person:Persone){
    person.id = (this.getAllProducys().at(this.getAllProducys().length - 1)?.id || 0) + 1;
    this.personState.update(state => [...state,person]);
  }


}
