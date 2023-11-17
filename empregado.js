const Pessoa = require('./pessoa');

class Empregado extends Pessoa {
  constructor(nome, sobrenome, cpf, endereco, salario, indice) {
    super(nome, sobrenome, cpf, endereco);
    this.salario = salario;
    this.indice = indice;
  }

  identificar() {
    super.identificar();
    console.log(`Salario: ${this.salario}`);
    console.log(`indice: ${this.indice}`);
  }
}

module.exports = Empregado;
