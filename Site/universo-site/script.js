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
            texto: "**MERCÚRIO** é o planeta mais próximo do Sol. Na astrologia, ele rege a **Comunicação**, o **Raciocínio** e a **Agilidade Mental**. É a forma como você aprende e se expressa. \n\n**Curiosidades:** Apesar de próximo do Sol, não é o mais quente. Seu dia é mais longo que seu ano.",
            corDestaque: '#e5e5e5' // Cor do texto/borda para Mercúrio
        },
        'venus': {
            nome: "VÊNUS",
            texto: "**VÊNUS** é o planeta que rege o **Amor**, a **Beleza**, os **Valores Pessoais** e a **Harmonia**. Ele define a maneira como nos relacionamos, damos e recebemos afeto. \n\n**Curiosidades:** É o planeta mais quente e tem uma rotação retrógrada (gira ao contrário dos outros).",
            corDestaque: '#ffcc00' // Cor do texto/borda para Vênus
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