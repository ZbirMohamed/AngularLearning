import { Persone } from "../models/Persone.module";
import { PersonsService } from "./persons.service";
import { TestBed } from '@angular/core/testing';

describe('person service tests',()=>{
    
    let staffService: PersonsService;
    
    beforeEach(() => {
        
        TestBed.configureTestingModule({
            providers: [PersonsService]  // 💡 Ajoute le service ici pour l'injection
        });

        staffService = TestBed.inject(PersonsService); // ✅ Injection Angular
        
        staffService.personState.set(
            [
              {id: 1,nom: 'Dupont',prenom: 'Jean',age: 35,mature: true,salaire: 3000},
              {id: 2,nom: 'Martin',prenom: 'Marie',age: 28,mature: true,salaire: 2500},
              {id: 3,nom: 'Lemoine',prenom: 'Paul',age: 50,mature: true,salaire: 4000},
              {id: 4,nom: 'Leclerc',prenom: 'Sophie',age: 22,mature: false,salaire: 1500},
              {id: 5,nom: 'Durand',prenom: 'Lucie',age: 40,mature: true,salaire: 3500},
            ]
          )
    });


    describe('get all staff',()=>{
        
        it('returns the correct number of staff members inside my beforeeach fucntions',()=>{
            expect(staffService.getAllProducys().length).toEqual(5);
        });

        it('returns the exact first person Dupont',()=>{
            expect(staffService.getAllProducys()[0].nom).toEqual('Dupont');
        });

        it('returns the exact number of mature persons',()=>{
            expect(staffService.getAllProducys().filter(s => s.mature).length).toEqual(4);
        });
    });

    describe('adding a user to the personState',()=>{
        
        let person: Persone;
    
        beforeEach(() => {
            person = {
                nom: "Zbir",
                prenom: "Mohamed",
                age: 23,
                mature: true,
                salaire: 4500
            };

            staffService.saveStaff(person);
        });

        it('returns the correct number of staff after adding 6',()=>{
            
            expect(staffService.getAllProducys().length).toEqual(6);
        });

        it('returns the correct Name of the last added member',()=>{
            expect(staffService.getAllProducys()[staffService.getAllProducys().length - 1].nom).toEqual(person.nom);
        });

    })

});