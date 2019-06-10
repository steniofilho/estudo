import { Injectable } from '@angular/core';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class FuncionalidadeService {

  clients: Client[] = [];
  constructor() { }

  getClients() {
    return this.clients;
  }

  addClient(c: Client) {
    this.clients.push(c);
  }

  removeClient(index) {
    this.clients.splice(index,1);
  }
}
