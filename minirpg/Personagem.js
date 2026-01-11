class Personagem{
    constructor(nome, classe, vidaMaxima, ataque, defesa){
        this.nome = nome;
        this.classe = classe;
   

        this.vidaMaxima = Number(vidaMaxima);
        this.vida = Number(vidaMaxima);
        this.ataque = Number(ataque);
        this.defesa = Number(defesa)
 }
    getStatusVida(){
        return `${this.nome} => ${this.vida}/${this.vidaMaxima}`
    }
   atacar(alvo){
    let dano;

    if(this.ataque > alvo.defesa){
        dano = this.ataque - alvo.defesa
    } else{
        dano = (this.ataque)/ 2;
    }
    alvo.vida -= dano;

    if (alvo.vida < 0 ){
        alvo.vida = 0
    }

    return dano;
   }
    estarVivo(){
        return this.vida > 0;
    }

}  
module.exports = Personagem;
