import { Component, EventEmitter, Output } from "@angular/core";
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

    constructor(private service: TransferenciaService){}

    transferir(){
        const valorEmitir: Transferencia = {
            valor: this.valor, 
            destino: this.destino,
            data: new Date()
        }
        this.service
        .adicionar(valorEmitir)
        .subscribe(resultado => {
            console.log(resultado);
            this.limparCampos();
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