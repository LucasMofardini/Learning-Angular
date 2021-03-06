import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../services/models/transferencia.models';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias: Array<Transferencia> = [];


  constructor(private service: TransferenciaService){}

  ngOnInit(){
    this.service.todas().subscribe((transferencias: Transferencia[])=>{
      console.log(transferencias);
      this.transferencias = transferencias;
    })
  }

}
