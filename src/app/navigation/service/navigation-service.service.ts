import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationServiceService {
  users: any = [{ id: 1, name: 'Shiva' }, { id: 2, name: 'Satish' }]
  constructor() { }
}
