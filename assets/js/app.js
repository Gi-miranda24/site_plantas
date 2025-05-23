// Carrossel de imagens

let slideIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carrossel-slide');
    const totalSlides = slides.length;

    slideIndex += direction;
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1; // Vai para o último slide
    }
    if (slideIndex >= totalSlides) {
        slideIndex = 0; // Vai para o primeiro slide
    }

    const carrosselContainer = document.querySelector('.carrossel-container');
    carrosselContainer.style.transform = `translateX(-${slideIndex * 100}%)`; // Mover os slides
}

function startAutoSlide() {
    setInterval(function() {
        moveSlide(1); // Muda o slide automaticamente
    }, 3000); // Intervalo de 3 segundos
}

//Botões de pesquisa
startAutoSlide();
const searchButton = document.querySelector('.search-button');
const searchContainer = document.querySelector('.search-container');

if (searchButton && searchContainer) {
  searchButton.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
    const searchInput = searchContainer.querySelector('.search-input');
    if (searchContainer.classList.contains('active')) {
      searchInput.focus(); 
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const botoesCarrinho = document.querySelectorAll('.botao-carrinho');

  botoesCarrinho.forEach(botao => {
    botao.addEventListener('click', function() {
      const produtoDiv = this.closest('.produto');
      const nomeProduto = produtoDiv.querySelector('h3').textContent;
      const precoProduto = produtoDiv.querySelector('.preco').textContent;

      // Aqui você implementaria a lógica para adicionar o produto ao carrinho
      alert(`Produto "${nomeProduto}" com preço "${precoProduto}" adicionado ao carrinho!`);
      console.log('Produto:', nomeProduto, 'Preço:', precoProduto);
      // Você provavelmente fará uma requisição AJAX para o seu servidor aqui
    });
  });
});
// manipulando o DOM para adicionar produtos ao carrinho
function addToCart(event) {
    const produto = event.target.parentNode;
    const produtoNome = produto.querySelector('h3').innerText;
    const produtoImagem = produto.querySelector('img').src;
    const produtoPreco= produto.querySelector('p:nth-child(3)').innerText;
  
    // Cria um objeto para representar o produto
    const productData = {
      nome: produtoNome,
      imagem: produtoImagem,
      preco: produtoPreco,
    };
  
    // Obtém o carrinho atual do armazenamento local ou cria um novo array vazio
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Adiciona o produto ao carrinho
    cart.push(productData);
  

  
    // Salva o carrinho atualizado de volta no armazenamento local
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  const buyButtons = document.querySelectorAll('.buy-btn');
  
  buyButtons.forEach(button => {
    button.addEventListener('click', addToCart);
  });

  