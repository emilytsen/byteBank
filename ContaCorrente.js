import {
    Conta
} from "./Conta.js";

export class ContaCorrente extends Conta { //vai inserir código do Conta aqui (herança); 
    static numeroDeContas = 0;

    constructor(cliente, agencia) {
        super(0, cliente, agencia); //vai chamar o construtor da classe pai (Conta);
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {

        let taxa = 1.1; //taxa de 10%; 
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }
}