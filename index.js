import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Adonis", 11122233309);

const contaCorrenteAdonis = new Conta(0, cliente1, 1001);
contaCorrenteAdonis.depositar(500);
contaCorrenteAdonis.sacar(100);

const contaPoupanca = new Conta(50, cliente1, 1001);

console.log(contaPoupanca);
console.log(contaCorrenteAdonis);
