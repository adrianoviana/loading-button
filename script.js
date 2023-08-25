// Seleciona o elemento do botão de busca no DOM através de seu ID e o armazena na constante "searchButton".
const searchButton = document.querySelector('#search-button');

// Seleciona o elemento filho "div" do botão de busca no DOM através de seu ID e o armazena na constante "searchButtonContent".
const searchButtonContent = document.querySelector('#search-button div');

// Adiciona um ouvinte de evento "click" ao botão de busca, quando o botão é clicado, a função "toggleButton" será chamada.
searchButton.addEventListener('click', toggleButton);

// Definição da função "toggleButton", que é chamada quando o botão de busca é clicado.
function toggleButton() {
    // Alterna a classe "loading" no elemento "searchButtonContent", se a classe estiver presente, ela é removida, caso contrário, é adicionada.
    searchButtonContent.classList.toggle('loading');
}
