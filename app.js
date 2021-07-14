//Importação da database
const livros = require('./database')
const readline = require('readline-sync')

//Pegar input
const entradaInicial = readline.question('Deseja buscar um livro? S/N ')

//Se for sim -> exibe as categorias disponíveis e pergunta qual categoria ela escolhe
if (entradaInicial.toLocaleUpperCase() === 'S') {
  console.log('Essas são as categorias disponíveis:')
  console.log('Programacao', '/Algoritmos', '/Banco de dados', '/Web Design')

  const entradaCategoria = readline.question('Escolha uma categoria: ')

  const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

  console.table(retorno)
} else {
  //Se for não -> exibe todos os livros em ordem crescente pela quantidade de páginas
  const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas)
  console.log('Essas são todos os livros disponíveis: ')
  console.table(livrosOrdenados)
}
