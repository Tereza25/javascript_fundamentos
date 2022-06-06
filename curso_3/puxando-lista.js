//Vamos puxar uma lista apenas da propriedade cursos de todos os objetos, mesmo sendo de estudantes diferentes.

const estudante = [
  {
    nome: "Tereza",
    idade: 32,
    matricula: "123456",
    cursos: [
      {
        nomeCurso: "back-end",
        disciplinas: 10,
        cargaHoraria: "120h",
      },
    ],
  },
  {
    nome: "Rafaela",
    idade: 30,
    matricula: "342389",
    cursos: [
      {
        nomeCurso: "banco de dados",
        disciplinas: 7,
        cargaHoraria: "100h",
      },
    ],
  },
];

const listaCursos = [...estudante[0].cursos, ...estudante[1].cursos]

console.log(listaCursos) //Aqui mostra o resultado no formato de array de objetos.

console.table(listaCursos) //Aqui mostra o resultado no formato de tabela.

//Spread Operator "...", é um operador que permite espalhar as informações de um array de objetos em um outro array. 
// link https://www.youtube.com/watch?v=f8a-qwKC5yk 
//MDN https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax