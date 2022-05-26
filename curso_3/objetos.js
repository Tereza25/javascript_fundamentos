const estudante = {
	nome: "Tereza",
	idade: 32,
	matricula: "123456",
}

// console.log(estudante.nome);

// console.log(estudante["matricula"]);

// console.log(`Meu nome é ${estudante.nome} e tenho ${estudante.idade} anos.`)

//console.log(estudante.matricula.substring(0, 3));

for (const key in estudante) {
	console.log(estudante[key])
}