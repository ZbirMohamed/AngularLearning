import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Persone } from '../../models/Persone.module';
import { PersonsService } from '../../services/persons.service';

@Component({
  selector: 'app-add-person',
  imports: [ReactiveFormsModule],
  templateUrl: './add-person.component.html',
  styleUrl: './add-person.component.css'
})
export class AddPersonComponent implements OnInit {
  staffForm! : FormGroup;

  constructor(private fb: FormBuilder,private personService: PersonsService){}

  ngOnInit(): void {
    this.staffForm = this.fb.group({
      nom: this.fb.control(''),
      prenom: this.fb.control(''),
      salaire: this.fb.control(0),
      age: this.fb.control(0),

    });
  }

  onSubmit(): void {
    let staff: Persone = {
      id: 0,
      nom: this.staffForm.value.nom,
      prenom: this.staffForm.value.prenom,
      mature: this.staffForm.value.age >= 18,
      salaire: this.staffForm.value.salaire,
      age: this.staffForm.value.age
    }
    console.log('Formulaire soumis avec :', staff);
    this.personService.saveStaff(staff);
    this.staffForm.reset();
  }
}
