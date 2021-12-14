import { Cliente } from "./Cliente.js";
import { contaCorrente } from "./ContaCorrente.js";
import { contaPoupanca } from "./ContaPoupanca.js";

let cliente1 = new Cliente('Marcelo', 21898848882);
let cc1 = new contaCorrente(0, cliente1.nome, 1001)
cc1.depositar(100)
cc1.sacar(20)

let cliente2 = new Cliente('Thenili', 36973379800)
let cc2 = new contaCorrente(100, cliente2.nome, 1001)

cc1.tranferir(50, cc2)

console.log(cliente1, cc1);
console.log(cliente2, cc2);