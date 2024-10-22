"use strict";

var alunos = [{
  nome: "João",
  nota: 7
}, {
  nome: "Maria",
  nota: 5
}, {
  nome: "Pedro",
  nota: 8
}, {
  nome: "Ana",
  nota: 6
}, {
  nome: "Carlos",
  nota: 9
}];
function filtrarAlunosComNotaMaiorOuIgualASeis(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var alunosComNotaMaiorOuIgualASeis = filtrarAlunosComNotaMaiorOuIgualASeis(alunos);
console.log("Alunos com nota maior ou igual a 6:");
alunosComNotaMaiorOuIgualASeis.forEach(function (aluno) {
  return console.log("".concat(aluno.nome, " - ").concat(aluno.nota));
});