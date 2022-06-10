import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias: Array<any> = [];


  constructor(private service: TransferenciaService){}

  ngOnInit(){
      this.transferencias = this.service.transferencias;
  }

}
