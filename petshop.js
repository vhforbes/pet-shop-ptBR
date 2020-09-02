const json = require('./json')

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

// Todas as Funções 

    // Listar os pets :

const listarPets = (arrayPets) => {
  arrayPets.forEach(element => {
    console.log("Nome: " + element.nome + " | Tipo: " + element.tipo);
  })
}

    // Filtrar pet por nome: 

const filtrarNomePets = nome => {
  let petsFiltrados = pets.filter(pet => {     // REVISAR .FILTER
    return pet.nome == nome
  })
  if(petsFiltrados.length == 0) {
    return 'Nenhum pet encontrado'
  } else return petsFiltrados
}

    // Filtrar por ID:

  const filtrarPorID = id => {
    let petFiltrado = pets.filter(pet => {
      return pet.id == id
    })
    if (petFiltrado.length == 0) {
      return 'Nenhum pet com o ID ' + id + ' encontrado'
    } else return petFiltrado
  }

    // Lista pets vacinados

const listarVacinados = (arrayPets) => {
  arrayPets.forEach(element => {
    if (element.vacinado) {
      console.log(element.nome, 'está vacinado!')
    } else {
      console.log(element.nome, 'não está vacinado!')
    }
  })
}

    // Validar se o objeto possui as Keys necessárias

const validaDados = (objetoPet) => {
  return (objetoPet.nome && objetoPet.tipo && objetoPet.raca && objetoPet.idade && objetoPet.genero && typeof objetoPet.vacinado == "boolean")
}

    // Cadastrar um novo pet

const cadastrarPet = (objetoPet) => {
  if (typeof objetoPet == "object") {
    if (validaDados(objetoPet)) {
      objetoPet.id = randomID()
      pets.push(objetoPet);
      console.log('Pet cadastrado com sucesso!')
    } else {
      console.log("O objeto não tem as propriedades necessárias.")
    }
    
  } else {
    console.log('Insira um objeto válido.')
  }
}

    // Remover um pet da nossa lista

const removerPet = id => {
  let pet = pets.find(pet => pet.id == id)
  pets.splice(pets.indexOf(pet), 1) 
}

    // Alterar dados pet

const alterarPet = (id, key, valor) => {
  let pet = pets.find(pet => pet.id == id)
  let objeto = pets[pets.indexOf(pet)]
  objeto[key] = valor
} 

    // Random ID generator

function randomID() { 
  return Math.floor(Math.random() * 100) // Math.random way, can have conflicts
  // Date.now() // Give date in miliseconds
}

    // Cadastrar Lista JSON

const cadastrarJson = (lista, json) => {
  let arrayPets = JSON.parse(json)
  for (let object of arrayPets) {
    lista.push(object)
  }
}

    // Verificar se está vacinado

const estaVacinado = (objetoPet) => {
  if (objetoPet.vacinado == true) {
    console.log("Esse Pet já está vacinado")
  } else {
    console.log("Esse Pet não está vacinado")
  }
}

    // Serviços 

const fazerServico = (pet, servico) => {
  servico(pet)
}

const tosar = (pet) => {
  let data = new Date
  let dataFinal = data.getDate() + "/" + (data.getMonth() + 1) + '/' + data.getFullYear()
  pet.servicos.push("Tosa dia " + dataFinal)
  console.log(`O ${pet.nome} está sendo tosado`);
}

const banho = (pet) => {
  let data = new Date
  let dataFinal = data.getDate() + "/" + (data.getMonth() + 1) + '/' + data.getFullYear()
  pet.servicos.push("Banho dia " + dataFinal)
  console.log(`O ${pet.nome} está tomando banho`)
}

// 

let objetoPet1 = {
    id: '',
    nome: 'Piadsdas',
    tipo: 'passaro',
    raca: 'calopsita',
    idade: 3,
    genero: 'femea',
    vacinado: false,
    servicos: [],
  }

