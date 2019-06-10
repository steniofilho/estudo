import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { FuncionalidadeService } from '../funcionalidade.service';

@Component({
  selector: 'app-tabela1',
  templateUrl: './tabela1.component.html',
  styleUrls: ['./tabela1.component.scss']
})
export class Tabela1Component implements OnInit {

  clients: Client[] = [];

  nome: string;
  idade: number;

  constructor(private servico: FuncionalidadeService) { }

  ngOnInit() {
    this.clients = this.servico.getClients();
  }

  save() {
    this.servico.addClient( {
      nome: this.nome,
      idade: this.idade
    });
  }

  delete(index) {
    this.servico.removeClient(index);
  }


}
