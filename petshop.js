const json = require('./json')

//

let pets = [
  {
    nome: 'Yoshi',
    tipo: 'cachorro',
    raca: 'Akita inu',
    idade: 6,
    genero: 'Masculino',
    vacinado: true,
    servicos: [],
  },
  {
    nome: 'Pituco',
    tipo: 'passaro',
    raca: 'calopsita',
    idade: 3,
    genero: 'femea',
    vacinado: false,
    servicos: [],
  }
];

// Todas as Funções 

    // Listar os pets :
function listarPets(arrayPets) {
  for (let i = 0; i < arrayPets.length; i++) {
    console.log("Nome: " + arrayPets[i].nome + " Tipo: "
      + arrayPets[i].tipo
    );
  }
}

    // Listar Pets Vacinados
function listarVacinados(arrayPets) {
  for (let i = 0; i < arrayPets.length; i++) {
    if (arrayPets[i].vacinado) {
      console.log(arrayPets[i].nome, 'está vacinado!')
    } else {
      console.log(arrayPets[i].nome, 'não está vacinado!')
    }
  }
}

    // Validar se o objeto possui as Keys necessárias
function validaPet(objetoPet) {
  return (objetoPet.nome && objetoPet.tipo && objetoPet.raca && objetoPet.idade && objetoPet.genero && typeof objetoPet.vacinado == "boolean")
}

    // Cadastrar um novo pet
function cadastrarPet(objetoPet) {
  if (typeof objetoPet == "object"){
    if (validaPet(objetoPet)) {
      pets.push(objetoPet);
      console.log('Pet cadastrado com sucesso!')
    } else {
      console.log("O objeto não tem as propriedades necessárias.")
    }
    
  } else {
    console.log('Insira um objeto válido.')
  }
}

  // Cadastrar Lista JSON

function cadastrarJson(lista, json) {
  let arrayPets = JSON.parse(json)
  for (let object of arrayPets) {
    lista.push(object)
  }
}

    // Verificar se está vacinado
function estaVacinado(objetoPet) {
  if (objetoPet.vacinado == true) {
    console.log("Esse Pet já está vacinado")
  } else {
    console.log("Esse Pet não está vacinado")
  }
}

    // Serviços 
function fazerServico(pet, servico) {
  servico(pet)
}

function tosar(pet) {
  pet.servicos.push("tosou dia " + new Date())
  console.log(`O ${pet.nome} está sendo tosado`)

}

function banho(pet) {
  pet.servicos.push("banho dia " + new Date())
  console.log(`O ${pet.nome} está sendo tosado`)
}

// Executando funções

cadastrarJson(pets, json)

console.log(pets)

