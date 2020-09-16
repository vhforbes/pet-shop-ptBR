const json = require('./json');
const { indexOf } = require('./json');
const funcoesPet = require('./funcoes');
const {
  listarPets,
  filtrarNomePets,
  filtrarPorID,
  listarVacinados,
  validaDados,
  cadastrarPet,
  removerPet,
  alterarPet,
  alterarPet2,
  randomID,
  cadastrarJson,
  estaVacinado,
  fazerServico,
  tosar,
  banho,
 } = require('./funcoes');

//

let pets = [
  {
    id: 1,
    nome: 'Yoshi',
    tipo: 'cachorro',
    raca: 'Akita inu',
    idade: 6,
    genero: 'Masculino',
    vacinado: true,
    servicos: [],
  },
  {
    id: 2,
    nome: 'Pituco',
    tipo: 'passaro',
    raca: 'calopsita',
    idade: 3,
    genero: 'femea',
    vacinado: false,
    servicos: [],
  }
];
 

let objetoPet1 = {
    id: '3',
    nomeaa: 'Piadsdas',
    tipo: 'passaro',
    raca: 'calopsita',
    idade: 3,
    genero: 'femea',
    vacinado: false,
    servicos: ['adas'],
  }