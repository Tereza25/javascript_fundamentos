const estudante = {
	nome: "Tereza",
	idade: 32,
  matricula: "123456",
	cursos: [{
		nomeCurso: "back-end",
		disciplinas: 10,
		cargaHoraria: "120h"
	}, 
  {
    nomeCurso: "banco de dados",
    disciplinas: 7,
    cargaHoraria: "100h"
  }]
};

const filtroCurso = estudante.cursos.filter(curso => curso.cargaHoraria==="100h");

console.log(filtroCurso);

console.log(filtroCurso[0].nomeCurso);

