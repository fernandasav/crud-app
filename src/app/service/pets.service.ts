import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private _http: HttpClient) { }

  addPets(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/pets',data)
  }

  getPetsList(): Observable<any>{
    return this._http.get('http://localhost:3000/pets')
  }
}
