    import {
        Cliente
    } from "./Cliente.js";
    import {
        ContaCorrente
    } from "./ContaCorrente.js";
    import {
        ContaPoupanca
    } from "./ContaPoupanca.js";
    import {
        Conta
    } from "./Conta.js";
import { ContaSalario } from "./ContaSalario.js";




    const cliente1 = new Cliente("Emily Tsen", 12345678910);
    const contaCorrente1 = new ContaCorrente(cliente1, 1001); //saldo já vem zerado;

    contaCorrente1.depositar(100);
    contaCorrente1.sacar(10); //sacar do ContaCorrente

    const contaPoupanca1 = new ContaPoupanca(50, cliente1, 1001);
    contaPoupanca1.sacar(10); //sacar do Conta

    const ContaSalario1 = new ContaSalario(cliente1)
    ContaSalario1.depositar(100);
    ContaSalario1.sacar(10);

    console.log(contaCorrente1);
    console.log(contaPoupanca1);
    console.log(ContaSalario1)



    const cliente2 = new Cliente("Augusto", 12345678911);
    const contaCorrente2 = new ContaCorrente(1001, cliente2);
    // const conta = new Conta(1001, cliente2); (throw new Error)


    contaCorrente2.depositar(300);
    contaCorrente2.sacar(100);


    console.log(`Número de contas: ${ContaCorrente.numeroDeContas}`)