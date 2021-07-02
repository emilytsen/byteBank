import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    _cliente;

    //acessor set e get:

    set cliente(novoValor){
        if (novoValor instanceof Cliente){//conta só aceita valor se for do molde cliente;
            this._cliente = novoValor;
        }  
        
    }
    get cliente(){
        return this._cliente;
    }

    //#saldo = 0; # e _ representam que o atributo é privado e pode ser alterada apenas na class
    _saldo = 0;

    get saldo(){
        return this._saldo; 
    }

    get agencia(){
        return this.agencia;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this._cliente = cliente
        ContaCorrente.numeroDeContas += 1; 
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }
    //()significa que não é apenas um atributo mas vai fazer algo.
    //valor -  onde vai atuar (parêmetro) variável que vai receber o número (exigencia para ser realizada a função) 
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