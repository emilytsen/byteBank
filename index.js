import {
    Gerente
} from "./Funcionario/Gerente.js";

import {
    Diretor
} from "./Funcionario/Diretor.js";

import {
    SistemaAutenticacao
} from "./SistemAutenticacao.js";

import{
    Cliente
} from "./Cliente.js";


const gerente1 = new Gerente("Ana", 12345678910, 4000);
gerente1.cadastrarSenha(123456);
console.log(gerente1);

let estaLogadoG = SistemaAutenticacao.login(gerente1, 123456)
console.log(estaLogadoG);


const diretor1 = new Diretor("Luiz", 11122233344, 4000);
diretor1.cadastrarSenha(111222);
console.log(diretor1);

let estaLogadoD = SistemaAutenticacao.login(diretor1, 1112222);
console.log(estaLogadoD);


console.log("................................................");

const cliente1 = new Cliente("José", 12345678888, "20394");
console.log(cliente1)
let estaLogadoC = SistemaAutenticacao.login(cliente1, 203)
console.log(estaLogadoC)