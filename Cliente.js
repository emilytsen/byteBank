//Ao envés de criar 1 por 1... usar CLASS
// const cliente2Nome = "Augusto"
// const cliente2CPF = 12345678911
// const cliente2Agencia = 1001
// const cliente2Saldo = 0

//class = é um molde
//Não servem apenas para dados, servem para comportamentos ou oprerações mais conhecidas como métodos (ex: o sacar ) 

//cliente1,2,3... = são objetos
export class Cliente {
    nome;
    _cpf;

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    } //constructor vai ser chamado quando for criado um new objeto de Cliente;
      //Só poderá ser atribuído 1 vez; 
}
