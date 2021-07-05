import { Cliente } from "./Cliente.js";

export class Conta{
    constructor(saldoInicial, cliente, agencia){
        
        this._saldo = saldoInicial; //propriedades de instância;
        this._cliente = cliente;
        this._agencia = agencia; 
    }

    set cliente(novoValor){
        if (novoValor instanceof Cliente){//conta só aceita valor se for do molde cliente;
            this._cliente = novoValor;
        }   
    }
    get cliente(){
        return this._cliente;
    }
 


    sacar(valor) {

        let taxa = 1;
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return // early return (poupar tempodo de execussão)
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
} 