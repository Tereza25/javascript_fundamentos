import chalk from 'chalk';
import fs from 'fs';


// console.log(chalk.blue('Cadastro válido'));

// console.log(chalk.red('Cadastro inválido'));


function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'));
}

// Exemplo 1
// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = 'utf-8';
//   fs.readFile(caminhoDoArquivo, encoding, (erro, dados) => {
//     if (erro) {
//       trataErro(erro);
//     }
//     console.log(chalk.blue(dados));
//   })
// }

// Exemplo 2
// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = 'utf-8';
//   fs.promises
//   .readFile(caminhoDoArquivo, encoding)
//   .then((texto) => chalk.green(console.log(texto)))
//   .catch((erro) => trataErro(erro))
// }


// Exemplo 3
async function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    console.log(chalk.green(texto))
  } catch(erro) {
    trataErro(erro);
  }
}

pegaArquivo('./arquivos/textoBiblioteca.md');