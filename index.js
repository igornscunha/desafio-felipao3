// Escrevendo as classe de um Jogo
//////////////////////////////////////////

// Criando uma classe de personagens
class personagem{
    // Iniciando os atributos
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    // Imprime o personagem e o seu golpe
    atacar(){
        console.log(`O ${this.tipo} atacou ${this.tipoDeAtaque(this.tipo)}`)
    }

    // Define o tipo de ataque de cada personagem
    tipoDeAtaque(tipo){
        switch(tipo){
            case "mago": return "usando magia"
            case "guerreiro": return "usando espada"
            case "monge": return "usando artes marciais"
            case "ninja": return "usando shuriken"
        }
    }
}

// intanciando objetos
let hero1 = new personagem("John Smith", 9000, "mago")
hero1.atacar()
let hero2 = new personagem("Sasuke Uchiha", 16, "ninja")
hero2.atacar()
let hero3 = new personagem("Tony Jaa", 27, "monge")
hero3.atacar()
let hero4 = new personagem("Jack", 18, "guerreiro")
hero4.atacar()