import { Component } from "@angular/core";

@Component({
    selector: 'app-nova-tranferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent{
    valor: number;
    destino:number;

    transferir(){
        console.log(`${this.valor} e ${this.destino}`);
    }
}