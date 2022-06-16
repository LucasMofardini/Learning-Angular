import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Transferencia } from "../services/models/transferencia.models";
import { TransferenciaService } from "../services/transferencia.service";

@Component({
    selector: 'app-nova-tranferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent{

    @Output() aoTranferir = new EventEmitter<any>();

    valor: number;
    destino:number;

    constructor(private service: TransferenciaService, private router: Router){}

    transferir(){
        const valorEmitir: Transferencia = {
            valor: this.valor, 
            destino: this.destino,
            data: new Date()
        }
        this.service
        .adicionar(valorEmitir)
        .subscribe(resultado => {
            this.limparCampos();
            this.router.navigateByUrl('extrato');
        }, 
        (error)=>{
            console.error(error);
        });
    }

    limparCampos(){
        this.valor = 0;
        this.destino = 0;
    }
}