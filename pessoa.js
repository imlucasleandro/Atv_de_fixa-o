class Pessoa {
    constructor(nome, sobrenome, cpf, endereco) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.cpf = cpf;
      this.endereco = endereco;
    }
  
    identificar() {
      console.log(`Nome: ${this.nome} ${this.sobrenome}`);
      console.log(`CPF: ${this.cpf}`);
      console.log(`Endereço: ${this.endereco}`);
    }
  }
  
  module.exports = Pessoa;
  