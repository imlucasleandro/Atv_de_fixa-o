const Pessoa = require('./pessoa');

class Estudante extends Pessoa {
  constructor(nome, sobrenome, cpf, endereco, inscricao) {
    super(nome, sobrenome, cpf, endereco);
    this.inscricao = inscricao;
  }

  identificar() {
    super.identificar();
    console.log(`Inscricao: ${this.inscricao}`);
  }
}

module.exports = Estudante;
