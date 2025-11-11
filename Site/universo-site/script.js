document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona todos os botões de planeta usando a classe 'planeta-btn'
    const planetButtons = document.querySelectorAll('.planeta-btn');
    
    // 2. Seleciona a área onde o texto do planeta será exibido
    const infoPlanetaDiv = document.getElementById('info-planeta');

    // ** SEU DICIONÁRIO DE TEXTOS DOS PLANETAS **
    // ** VOCÊ VAI ADICIONAR SEUS TEXTOS AQUI **
    const planetasData = {
        'mercurio': {
            nome: "MERCÚRIO",
            texto: "MERCÚRIO é o planeta mais próximo do Sol. Na astrologia, ele rege a Comunicação, o Raciocínio e a Agilidade Mental. É a forma como você aprende e se expressa. \n\nCuriosidades: Apesar de próximo do Sol, não é o mais quente. Seu dia é mais longo que seu ano.",
            corDestaque: '#e5e5e5' // Cor do texto/borda para Mercúrio
        },
        'venus': {
            nome: "VÊNUS",
            texto: "VÊNUS é o planeta que rege o Amor, a Beleza, os Valores Pessoais e a Harmonia. Ele define a maneira como nos relacionamos, damos e recebemos afeto. \n\nCuriosidades: É o planeta mais quente e tem uma rotação retrógrada (gira ao contrário dos outros).",
            corDestaque: '#ffcc00' // Cor do texto/borda para Vênus
        },
        'marte': {
            nome: "MARTE",
            texto: "Marte é o quarto planeta do Sistema Solar, conhecido como o 'Planeta Vermelho' devido ao óxido de ferro em seu solo. É um planeta rochoso com cerca de metade do tamanho da Terra, uma atmosfera fina composta principalmente por dióxido de carbono e duas pequenas luas, Fobos e Deimos. Possui características semelhantes à Terra, como estações, calotas polares, vulcões e cânions.",
            corDestaque: '#ff4000ff' // Cor do texto/borda para Vênus
        },
        'jupiter': {
            nome: "JÚPITER",
            texto: "Júpiter é o maior planeta do Sistema Solar, um gigante gasoso formado principalmente por hidrogênio e hélio, e o quinto planeta a partir do Sol. Ele não tem superfície sólida e é conhecido por sua atmosfera com faixas de nuvens e a Grande Mancha Vermelha, que é uma tempestade gigantesca. Seu tamanho é tão grande que todos os outros planetas do sistema solar caberiam dentro dele.",
            corDestaque: '#ff9728ff' // Cor do texto/borda para Vênus
        },
        'saturno': {
            nome: "SATURNO",
            texto: "Saturno é o sexto planeta do sistema solar, conhecido por seus impressionantes anéis, e o segundo maior planeta do sistema, atrás apenas de Júpiter. É um gigante gasoso, composto principalmente de hidrogênio e hélio, sem superfície sólida. Tem o maior número de luas no sistema solar, com mais de 140 satélites naturais conhecidos.",
            corDestaque: '#ffb668ff' // Cor do texto/borda para Vênus
        },
        'urano': {
            nome: "URANO",
            texto: "Urano é o sétimo planeta a partir do Sol, um gigante de gelo com o terceiro maior diâmetro do nosso Sistema Solar. É conhecido por sua inclinação axial extrema, que faz com que ele gire de lado, resultando em ciclos de 42 anos de luz e escuridão contínua para cada polo. Sua atmosfera é composta por hidrogênio, hélio e metano, e ele possui 13 anéis e 27 luas conhecidas.",
            corDestaque: '#68e8ffff' // Cor do texto/borda para Vênus
        },
        'netuno': {
            nome: "NETUNO",
            texto: "Netuno é o oitavo e último planeta do Sistema Solar, sendo um gigante de gelo caracterizado por sua cor azulada, atmosfera de hidrogênio, hélio e metano, ventos super-rápidos e tempestades violentas. É o quarto maior planeta em tamanho, embora mais massivo que Urano, e sua órbita em torno do Sol leva aproximadamente 164 anos terrestres.",
            corDestaque: '#005effff' // Cor do texto/borda para Vênus
        },
        'terra': {
            nome: "TERRA",
            texto: "A Terra é o terceiro planeta do Sistema Solar, o quinto maior, rochoso (ou telúrico) e o único conhecido por abrigar vida. Sua superfície é composta por cerca de 70% de água, o que lhe rende o apelido de 'planeta azul', e sua estrutura interna é dividida em crosta, manto e núcleo. ",
            corDestaque: '#005effff' // Cor do texto/borda para Vênus
        },
        // ** COPIE E COLE PARA OS OUTROS PLANETAS (mude 'terra', 'marte', etc.) **
        // 'terra': { /* ... */ }, 
    };
    // ------------------------------------------------------------------------

    // 3. Adiciona um "ouvinte de evento" (listener) a cada botão
    planetButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 4. Captura o valor do atributo 'data-planeta' (ex: 'mercurio', 'venus')
            const planetaClicado = this.getAttribute('data-planeta');
            const data = planetasData[planetaClicado];

            // 5. Verifica se existe informação para o planeta clicado
            if (data) {
                // Remove a classe de animação para resetar
                infoPlanetaDiv.classList.remove('aparecer');

                // Adiciona um pequeno atraso antes de atualizar e re-aplicar a animação
                setTimeout(() => {
                    // 6. Atualiza o conteúdo da div com o texto do planeta
                    infoPlanetaDiv.innerHTML = `
                        <h3>${data.nome}</h3>
                        <p>${data.texto.replace(/\n/g, '<br>')}</p>
                    `;
                    
                    // Opcional: Estiliza o botão clicado
                    this.style.borderColor = data.corDestaque;
                    
                    // Adiciona a classe para fazer o texto aparecer suavemente
                    infoPlanetaDiv.classList.add('aparecer');
                    
                }, 10); // Pequeno atraso para garantir o reset da animação
            }
        });

        // 7. Adiciona uma animação extra para o clique
        button.addEventListener('mousedown', function() {
            // Pequena redução de tamanho ao pressionar para dar a sensação de clique
            this.style.transform = 'scale(0.95)';
        });

        button.addEventListener('mouseup', function() {
            // Volta ao normal (ou para o estado de hover se o mouse ainda estiver em cima)
            this.style.transform = 'scale(1.1)'; 
        });

        button.addEventListener('mouseleave', function() {
            // Volta ao normal quando o mouse sai
            this.style.transform = ''; 
        });
    });
});