import {
    Conta
} from "./Conta.js";

export class ContaCorrente extends Conta { //vai inserir código do Conta aqui (herança); 
    static numeroDeContas = 0; //sem o static ele volta para o 0 a cada nova conta

    constructor(cliente, agencia) {
        super(0, cliente, agencia); //vai chamar o construtor da classe pai (Conta);
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {
        let taxa = 1.1; //taxa de 10%; 
        return this._sacar(valor, taxa);
    }
}