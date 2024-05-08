let totalGeral = 0;
const listaItems = JSON.parse(localStorage.getItem("listaItems")) || [];
 
document.addEventListener("DOMContentLoaded", function () {
  if (listaItems.length > 0) {
    let listaProdutos = document.querySelector("#lista-produtos");
    let totalValorProdutos = document.querySelector("#valor-total");
    listaItems.forEach(function (item) {
      let novoItem = document.createElement("li");
      let valorItem = item.quantidade * item.valor;
      totalGeral += valorItem;
      totalValorProdutos.textContent = `R$${totalGeral}`;
      novoItem.innerHTML = ` <span class="texto-azul">${item.quantidade}x </span>${item.nome}<span class="texto-azul"> ${item.valor}</span> `;
      listaProdutos.appendChild(novoItem);
    });
  }
});

function adicionar() {
  const listaProdutos = document.querySelector("#lista-produtos");
  const QTitems = parseInt(document.querySelector("#quantidade").value);
  const produto = document.querySelector("#produto").value;
  const totalValorProdutos = document.querySelector("#valor-total");
  const NomeProduto = produto.split("-")[0];
  const ValorProduto = parseInt(produto.split("R$")[1]);

  if (isNaN(QTitems) || QTitems <= 0) {
    alert("Selecione a quantidade e o produto!");
  } else {
    let novoItem = document.createElement("li");
    let valorItem = QTitems * ValorProduto;
    totalGeral += valorItem;
    listaProdutos.appendChild(novoItem);
    totalValorProdutos.textContent = `R$${totalGeral}`;
    novoItem.innerHTML = ` <span class="texto-azul">${QTitems}x </span>${NomeProduto}<span class="texto-azul"> ${ValorProduto}</span> `;
    listaItems.push({
      quantidade: QTitems,
      nome: NomeProduto,
      valor: ValorProduto,
    });
    localStorage.setItem("listaItems", JSON.stringify(listaItems));
  }
  quantidade.value=''
}

function limpar() {
  let listaProdutos = document.querySelector("#lista-produtos");
  listaProdutos.innerHTML = "";
  let totalValorProdutos = document.querySelector("#valor-total");
  totalValorProdutos.textContent = "R$0";
  document.querySelector("#quantidade").value = 0;
  localStorage.removeItem('listaItems');
  totalGeral = 0;

}
