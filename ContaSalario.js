import {
    Conta
} from "./Conta.js";

export class ContaSalario extends Conta {
    constructor(cliente) {
        super(0, cliente, 100);
    }
    sacar(valor) {
        let taxa = 1.03; //0,3%
        this._sacar(valor, taxa);
    }

}