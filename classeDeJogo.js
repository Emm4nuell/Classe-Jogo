const prompt = require("prompt-sync")();

class Jogo{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque;
    }

    apresentacao(){
        console.log("");
        console.log("|*********************************************************|");
        console.log("|****** SEJA BEM VINDO A PARTIDA CLASSE DE UM JOGO *******|");
        console.log(`|****** NOME: ${this.nome.toUpperCase()} ********************|`);
        console.log(`|****** IDADE: ${this.idade} ********************|`);
        console.log("|*********************************************************|");
        console.log("Escolha seu personagem:")
        console.log("")
        console.log("1 - Guerreiro;");
        console.log("2 - Mago;");
        console.log("3 - Monge;");
        console.log("4 - Ninja;");
        let escolha = prompt("----> ");
        this.personagem(escolha)
    }

    iniciarAtaque(){
        console.clear();
        console.log(`Deseja atacar com seu personagem ${this.tipo.toUpperCase()} ?`)
        console.log("1 -- Sim")
        console.log("2 -- Não");
        let escolha = prompt("----> ")
        if(escolha == 1){
            this.atacar();
        }else if(escolha == 2){
            console.log("Partida finalizada!")
        }else{
            console.log("Opção inválida! Escolha novamente.")
            this.iniciarAtaque();
        }
    }

    personagem(x){
        switch(Number(x)){
            case 1:
                this.tipo = "guerreiro";
                this.ataque = "espada";
                this.iniciarAtaque();
                break;
            case 2:
                this.tipo = "mago";
                this.ataque = "magia";
                this.iniciarAtaque();
                break;
            case 3:
                this.tipo = "monge";
                this.ataque = "artes marciais";
                this.iniciarAtaque();
                break;
            case 4:
                this.tipo = "ninja";
                this.ataque = "shuriken";
                this.iniciarAtaque();
                break;
            default:
                console.clear();
                console.log("Personagem inválido, escolha novamente");
                this.apresentacao();
        }
    }

    atacar(){
        console.log(`O ${this.tipo.toUpperCase()} atacou usando ${this.ataque.toUpperCase()}!`)
    }
}

let nome = prompt("Digite seu nome: ");
let idade = prompt("Digite sua idade:");

let jogo = new Jogo(nome, idade)
jogo.apresentacao();