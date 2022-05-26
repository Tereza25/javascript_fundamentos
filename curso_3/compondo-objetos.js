const estudante = {
	nome: "Tereza",
	idade: 32,
  matricula: "123456",
	cursos: [{
		nomeCurso: "back-end",
		disciplinas: 10,
		cargaHoraria: "120h"
	}]
};

estudante.cursos.push({
	nomeCurso: "banco de dados",
	disciplinas: 7,
	cargaHoraria: "100h"
})

console.log(estudante);

