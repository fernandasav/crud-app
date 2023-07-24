import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PetsService } from '../service/pets.service';

@Component({
  selector: 'app-pet-add-edit',
  templateUrl: './pet-add-edit.component.html',
  styleUrls: ['./pet-add-edit.component.scss']
})
export class PetAddEditComponent {
  empForm: FormGroup;

  animal: string[] = [
    'Bird',
    'Cat',
    'Dog',
    'Other'
  ]

  constructor(
    private _fb: FormBuilder, 
    private _petsService: PetsService,
    private _dialogRef: DialogRef<PetAddEditComponent>,
    ){
    this.empForm = this._fb.group({
      petName: '',
      ownerName: '',
      ownerEmail:'',
      petBirth:'',
      petGender: '',
      animalType: '',
      ownerAdress: '',
    })
  }
  onFormSubmit(){
    if(this.empForm.valid){
      this._petsService.addPets(this.empForm.value).subscribe({
        next: (val: any) => {
          alert ('Pet added successfully');
          this._dialogRef.close();
        }, error: (err: any) => {
          console.error(err);
        }
        
      })
    }

  }

}
