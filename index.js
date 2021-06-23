    import { Cliente } from "./Cliente.js";
    import { ContaCorrente } from "./ContaCorrente.js";


    const cliente1 = new Cliente();
    const cliente2 = new Cliente();

    cliente1.nome = "Emily";
    cliente1.cpf = 12345678910;


    // cliente2.nome = "Augusto";
    // cliente2.cpf = 12345678911;


    const conta1 = new ContaCorrente();

    conta1.agencia = 1001;
    conta1.cliente = cliente1;
    //contaCorrenteEmily.#saldo = 10 não vai funcionar, pois o saldo bvirou uma variável privada (ninguém pode alterar depois que foi definida na class)
    conta1.depositar(100);
    const valorSacado = conta1.sacar(50); //vai receber o return
    //SACAR DINHAIRO
    // let valor = 50
    // if (contaCorrenteEmily.saldo >= valor){
    //     contaCorrenteEmily.saldo -= valor
    // }


   


    const conta2 = new ContaCorrente();

    conta2.agencia = 1001;
    // conta2.cliente = cliente2
    conta2.cliente = new Cliente; //atribuindo valores de outra forma
    conta2.cliente.nome = "Augusto";
    conta2.cliente.cpf = 12345678911;

    
    conta2.depositar(300);
    conta2.sacar(100);


    conta1.transferir(39, conta2);
    console.log(conta1);
    console.log(conta2);
 
