// Função para mostrar/ocultar as caixas de informação
function toggleBox(id) {
  // Oculta todas as caixas de informações
  document.querySelectorAll('.info-box').forEach(box => {
    box.style.display = 'none';
  });

  // Mostra a caixa correspondente ao botão clicado
  let box = document.getElementById(id);
  if (box) {
    box.style.display = 'block'; // Exibe a caixa
  }
}

// Atribui o evento de clique aos botões para mostrar as caixas de texto
document.getElementById("btn-control").onclick = function() {
  toggleBox('box-control');
};

document.getElementById("btn-key").onclick = function() {
  toggleBox('box-key');
};

document.getElementById("btn-trophy").onclick = function() {
  toggleBox('box-trophy');
};

document.addEventListener("click", function(event) {
if (!event.target.closest('.info-box') && !event.target.closest('.icon-buttons')) {
    document.querySelectorAll('.info-box').forEach(box => box.style.display = 'none');
}
});
