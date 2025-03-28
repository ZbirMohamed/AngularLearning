import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Persone } from '../../models/Persone.module';
import { PersonsService } from '../../services/persons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-person',
  imports: [ReactiveFormsModule],
  templateUrl: './add-person.component.html',
  styleUrl: './add-person.component.css'
})
export class AddPersonComponent implements OnInit {
  staffForm! : FormGroup;

  constructor(private fb: FormBuilder,private personService: PersonsService,private router: Router){}

  ngOnInit(): void {
    this.staffForm = this.fb.group({
      nom: this.fb.control('',Validators.required),
      prenom: this.fb.control('',[Validators.required,Validators.minLength(5)]),
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
    // since i 'll be routing now i don't need a reset form
    //this.staffForm.reset();
    this.router.navigateByUrl('/');
  }
}
