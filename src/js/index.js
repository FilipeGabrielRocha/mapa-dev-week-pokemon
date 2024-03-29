// OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o próximo cartão da lista

// para começar na posição 0 dos cartoes ou seja no primeiro cartao
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
  // - passo 4 - buscar o cartão que esta selecionado
  const cartaoSelecionado = document.querySelector(".selecionado");
  //   remover o selecioando
  cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao) {
  cartoes[indiceCartao].classList.add("selecionado");
}

// - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
const btnAvancar = document.getElementById("btn-avancar");

// - passo 3 - fazer aparecer o próximo cartão da lista
const cartoes = document.querySelectorAll(".cartao");

// - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) cartaoAtual = -1;

  esconderCartaoSelecionado();

  //   vai adicionar mais um no cartaoAtual
  cartaoAtual++;
  mostrarCartao(cartaoAtual);
});

// OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista

// - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
const btnVoltar = document.getElementById("btn-voltar");

// - passo 3 - fazer aparecer o cartão anterior da lista
// ja foi criado uma variavel para achar

// - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) cartaoAtual = cartoes.length;

  esconderCartaoSelecionado();

  //   vai remover um no cartaoAtual
  cartaoAtual--;
  mostrarCartao(cartaoAtual);
});
