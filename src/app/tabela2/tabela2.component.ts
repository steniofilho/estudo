import { Component, OnInit } from '@angular/core';
import { FuncionalidadeService } from '../funcionalidade.service';
import { Client } from '../client';

@Component({
  selector: 'app-tabela2',
  templateUrl: './tabela2.component.html',
  styleUrls: ['./tabela2.component.scss']
})
export class Tabela2Component implements OnInit {

  clients: Client[] = [];
  constructor(private servico: FuncionalidadeService) { }

  ngOnInit() {
    this.clients = this.servico.getClients();
    console.log("t2 onInit");
    console.log(this.clients)
  }

}
