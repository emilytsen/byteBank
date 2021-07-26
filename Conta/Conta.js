import { Cliente } from "../Cliente.js";

export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if (this.constructor == Conta){ 
           throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois é uma classe abstrata. ");
        }
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
 
    //método abstrato
    sacar(valor){
        throw new Error("O método sacar da Conta é abstrato. É necessário sobscrever o método sacar na classe desejada.")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        else{
            return 0; 
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