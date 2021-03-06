import { Injectable, NgZone } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { GasModel } from './gas.model';

@Injectable()
export class GasService {

    gasLista: AngularFireList<any>;
    gasSelecionado: GasModel = new GasModel();

    constructor(
        private firebase: AngularFireDatabase
    ) { }

    getData() {
        this.gasLista = this.firebase.list('novoPedidoGas');
        return this.gasLista;
    }

    adicionarGas(gas: GasModel) {
        console.log(gas);
        this.gasLista.push({
            marca: gas.marca,
            novoRetornavel: gas.novoRetornavel,
            quantidade: gas.quantidade,
            formaPagamento: gas.formaPagamento,
            troco: gas.troco,
            valorUnitario: gas.valorUnitario,
            total: gas.total,
            dataPedido: gas.dataPedido,
            tipoObjeto: gas.tipoObjeto,
            hora: gas.hora
        });
    }

    updateEmployee(gas: GasModel) {
        this.gasLista.update(gas.$key, {
            marca: gas.marca,
            novoRetornavel: gas.novoRetornavel,
            quantidade: gas.quantidade,
            formaPagamento: gas.formaPagamento,
            troco: gas.troco,
            valorUnitario: gas.valorUnitario,
            total: gas.total,
            dataPedido: gas.dataPedido,
            tipoObjeto: gas.tipoObjeto,
            hora: gas.hora
        });
    }

    deleteEmployee($key: string) {
        this.gasLista.remove($key);
    }
}
