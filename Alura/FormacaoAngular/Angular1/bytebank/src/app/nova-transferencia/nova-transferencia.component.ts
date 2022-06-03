import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-nova-tranferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent{

    @Output() aoTranferir = new EventEmitter<any>();

    valor: number;
    destino:number;

    transferir(){
        this.aoTranferir.emit({
            valor: this.valor, 
            destino :this.destino});

        this.limparCampos();
    }

    limparCampos(){
        this.valor = 0;
        this.destino = 0;
    }
}