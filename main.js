let sakura = {
    vida: 100,
    forçaMagica: 10,
    moedasMagicas: 50
};

let rodadaAtual = 1;
let maxRodadas = 7;

function introducao() {
    console.log("Bem-vindo a 'As Aventuras de Sakura!'");
    console.log("Sakura Kinomoto acidentalmente libertou as Cartas Clow. Agora, ela precisa capturá-las antes que causem mais caos no mundo.");
    console.log("Com seu bastão mágico e a ajuda de seus amigos, ela embarca em uma jornada para selar essas cartas mágicas.");
}

function finalizacao(vitoria) {
    if (vitoria) {
        console.log("Parabéns! Sakura conseguiu capturar todas as Cartas Clow e restaurar a paz!");
    } else {
        console.log("Infelizmente, as Cartas Clow escaparam... a missão de Sakura falhou.");
    }
}

function gerarArmadilha() {
    const armadilhas = [
        { descricao: "uma barreira mágica", dano: Math.floor(Math.random() * 30) + 10 },
        { descricao: "um feitiço de paralisia", dano: Math.floor(Math.random() * 15) + 5 },
        { descricao: "uma ilusão criada pela Carta Ilusão", dano: Math.floor(Math.random() * 20) + 5 },
        { descricao: "uma carta falsa", dano: 0 }
    ];
    return armadilhas[Math.floor(Math.random() * armadilhas.length)];
}

function encontrarBau() {
    console.log("Sakura encontra um baú místico...");
    let chance = Math.random();
    if (chance < 0.4) {
        let moedasEncontradas = Math.floor(Math.random() * 30) + 5;
        sakura.moedasMagicas += moedasEncontradas;
        console.log(`Dentro do baú, Sakura encontra ${moedasEncontradas} moedas mágicas!`);
    } else {
        let itemMágico = Math.random() < 0.5 ? "poção de cura" : "poção de força";
        if (itemMágico === "poção de cura") {
            let cura = Math.floor(Math.random() * 20) + 5;
            sakura.vida += cura;
            console.log(`Sakura encontra uma poção de cura! Sua energia mágica aumenta em ${cura} pontos.`);
        } else {
            let perdaForça = Math.floor(Math.random() * 10) + 3;
            sakura.forçaMagica -= perdaForça;
            console.log(`A poção estava envenenada! Sakura perde ${perdaForça} pontos de força mágica.`);
        }
    }
}

function desafioRodada() {
    const ambientacoes = [
        "Sakura se encontra em uma floresta encantada, onde as árvores parecem sussurrar segredos das Cartas Clow.",
        "Um vento misterioso sopra em uma cidade deserta. Algo está à espreita nas sombras.",
        "No topo de uma montanha, Sakura sente a presença de uma poderosa Carta Clow escondida nas nuvens.",
        "Em um campo de flores mágicas, Sakura sente o poder das Cartas emanando do chão."
    ];

    console.log(ambientacoes[Math.floor(Math.random() * ambientacoes.length)]);
    
    let escolha = prompt("O que deseja fazer? 1. Lutar contra uma criatura mágica 2. Procurar um baú místico 3. Evitar armadilhas mágicas");
    switch (escolha) {
        case "1":
            let danoCriatura = Math.floor(Math.random() * 25) + 10;
            sakura.vida -= danoCriatura;
            console.log(`Sakura enfrentou uma criatura mágica e sofreu ${danoCriatura} de dano.`);
            break;
        case "2":
            encontrarBau();
            break;
        case "3":
            let armadilha = gerarArmadilha();
            console.log(`Sakura tenta evitar ${armadilha.descricao}.`);
            if (armadilha.dano > 0) {
                sakura.vida -= armadilha.dano;
                console.log(`Infelizmente, Sakura caiu na armadilha e perdeu ${armadilha.dano} de vida.`);
            } else {
                console.log("Sakura conseguiu evitar a armadilha sem sofrer danos!");
            }
            break;
        default:
            console.log("Escolha inválida! Uma Carta Clow solta um feitiço e Sakura perde 15 de vida.");
            sakura.vida -= 15;
    }
    
    console.log(`Status atual - Vida: ${sakura.vida}, Força Mágica: ${sakura.forçaMagica}, Moedas Mágicas: ${sakura.moedasMagicas}`);
}

function proximaRodada() {
    console.log(`Rodada ${rodadaAtual}`);
    if (sakura.vida <= 0) {
        finalizacao(false);
        return;
    }
    if (rodadaAtual > maxRodadas) {
        finalizacao(true);
        return;
    }
    desafioRodada();
    rodadaAtual++;
    proximaRodada();
}

function start() {
    introducao();
    proximaRodada();
}