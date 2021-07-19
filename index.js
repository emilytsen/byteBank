import {
    Gerente
} from "./Funcionario/Gerente.js";

import {
    SistemaAutenticacao
} from "./SistemAutenticacao.js";

const gerente1 = new Gerente("Ana", 12345678910, 4000);
gerente1.cadastrarSenha(123456) 
console.log(gerente1)


const estaLogado = SistemaAutenticacao.login(gerente1, 123456)

console.log(estaLogado);