const Estudante = require('./estudante');
const Empregado = require('./empregado');

const estudante1 = new Estudante('Joao', 'Silva', 123456789, 'Rua A, 123', 9876);
estudante1.identificar();

const empregado1 = new Empregado('Maria', 'Santos', 987654321, 'Rua B, 456', 5000, 1.5);
empregado1.identificar();

