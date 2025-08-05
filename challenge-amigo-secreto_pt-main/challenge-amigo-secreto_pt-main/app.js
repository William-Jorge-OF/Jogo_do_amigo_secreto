//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
  // Array para armazenar os nomes dos amigos
        const amigos = [];

        function adicionarAmigo() {
            // 1. Capturar o valor do campo de entrada
            const campoNome = document.getElementById('nomeAmigo');
            const nome = campoNome.value.trim(); // .trim() remove espaços em branco extras

            // 2. Validar a entrada
            if (nome === '') {
                alert('Por favor, insira um nome.');
                return; // Interrompe a execução da função
            }

            // 3. Adicionar o nome ao array de amigos
            amigos.push(nome);
            console.log(amigos); // Opcional: para verificar o array no console do navegador

            // 4. Limpar o campo de entrada
            campoNome.value = '';

            // Opcional: Atualizar a lista visualmente na tela
            exibirAmigosNaLista();
        }

        // Função para exibir os amigos na lista HTML (opcional, mas útil)
        function exibirAmigosNaLista() {
            const listaUl = document.getElementById('listaAmigos');
            listaUl.innerHTML = ''; // Limpa a lista antes de reconstruir

            amigos.forEach(amigo => {
                const li = document.createElement('li');
                li.textContent = amigo;
                listaUl.appendChild(li);
            });
        }

        
        /**
         * Seleciona aleatoriamente um nome do array `amigos` e exibe o resultado.
         */
        function sortearAmigo() {
            const resultadoSorteioElemento = document.getElementById('resultadoSorteio');

            // 1. Validar que há amigos disponíveis
            if (amigos.length === 0) {
                resultadoSorteioElemento.textContent = "Nenhum amigo na lista para sortear!";
                return;
            }

            // 2. Gerar um índice aleatório
            // Math.random() retorna um número entre 0 (inclusive) e 1 (exclusive)
            // Multiplicamos pelo tamanho do array para obter um número dentro do intervalo
            // Math.floor() arredonda para o número inteiro mais próximo para baixo
            const indiceSorteado = Math.floor(Math.random() * amigos.length);
            
            // 3. Obter o nome sorteado usando o índice
            const amigoSorteado = amigos[indiceSorteado];
            
            // 4. Mostrar o resultado
            resultadoSorteioElemento.textContent = `O amigo sorteado é: ${amigoSorteado}`;
        }
    