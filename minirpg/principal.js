const readline = require('readline');
const Personagem = require ('./Personagem.js')

let guerreiro = new Personagem("Thorin", "Guerreiro", 120, 25, 15);
let mago = new Personagem("Merlin", "Mago", 80, 35, 5);
let arqueiro = new Personagem("Robin", "Arqueiro", 100, 30, 10);
let paladino = new Personagem("Uther", "Paladino", 150, 20, 20);
let assassino = new Personagem("Ezio", "Assassino", 90, 40, 5);

function perguntarPersonagem(){
   const rl = readline .createInterface({
      input: process.stdin,
      output: process.stdout
   })


console.log("Veja a lista de personagens: ")
console.log("1-)\n Nome: Thorin\n Classe: Guerreiro\n Vida: 120\n Ataque: 25\n Defesa: 15\n")
console.log("2-)\n Nome: Merlin\n Classe: Mago\n Vida: 80\n Ataque: 35\n Defesa: 5\n")
console.log("3-)\n Nome: Robin\n Classe: Arqueiro\n Vida: 100\n Ataque: 30\n Defesa: 10\n")
console.log("4-)\n Nome: Uther\n Classe: Paladino\n Vida: 150\n Ataque: 20\n Defesa: 20\n")
console.log("5-)\n Nome: Ezio\n Classe: Assassino\n Vida: 90\n Ataque: 40\n Defesa: 5\n")

return new Promise ((resolve) => {
   rl.question("Escolha um personagem (1/2/3/4/5): ", (resposta) =>{
      let escolha = Number (resposta)
      let personagemEscolhido
  


 if(escolha === 1){
    personagemEscolhido = guerreiro;
 } else if (escolha === 2){
    personagemEscolhido = mago;
 } else if (escolha === 3){
    personagemEscolhido= arqueiro;
 } else if(escolha === 4){
    personagemEscolhido = paladino;
 } else if(escolha === 5){
   personagemEscolhido = assassino;
 } else {
    console.log("Número invalido, digite novamente");
    rl.close();
    return resolve(perguntarPersonagem())
 } 
   rl.close();
   resolve(personagemEscolhido)


})
}
)}
async function main(){
   let personagem = await perguntarPersonagem();
   console.log("Você escolheu o(a): ", personagem.nome,"\n", "Classe: ", personagem.classe)

   const personagens = [guerreiro, mago, arqueiro, paladino, assassino]

   const opcoesComputador = personagens.filter(personagens => personagens !== personagem)
   let computador = personagens[Math.floor(Math.random() * opcoesComputador.length)]


   console.log("O seu adversário é: ",  computador.nome, " - ", computador.classe)

   function sleep(ms){
      return new Promise (resolve =>   setTimeout(resolve, ms))
   }

   while(personagem.vida > 0 && computador.vida > 0){
   personagem.atacar(computador)
   console.log("Você está atacando!")
   await sleep(1500)
   console.log("O adversário esta com: ",computador.getStatusVida(computador), " de hp")
   console.log("Seu status de vida é: ", personagem.getStatusVida(personagem))
   await sleep(1500)
    if(computador.vida > 0){
      console.log("Agora, o adversário vai atacar")
      await sleep(1500)
      computador.atacar(personagem)
      console.log("Você está com: ", personagem.getStatusVida(personagem), " de hp")
       await sleep(1500)

       console.log("Fim do turno!")
       await sleep(3000)

   }
   if(personagem.vida > 0 && computador.vida == 0){
      console.log("Parabens, você ganhou!")
   } else if(personagem.vida == 0 && computador.vida > 0) {
      console.log("Você foi derrotado!")
   }
}
}


main()

