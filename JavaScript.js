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

const btnMenu = document.getElementById('btn-menu');
const sidebar = document.getElementById('sidebar');

// Toggle sidebar open/close
btnMenu.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

// Função para esconder todas as info-box da sidebar
function hideSidebarBoxes() {
  document.querySelectorAll('.sidebar-info-box').forEach(box => {
    box.style.display = 'none';
  });
}

// Adiciona evento para todos os botões da sidebar
document.querySelectorAll('.sidebar-btn').forEach(button => {
  button.addEventListener('click', () => {
    hideSidebarBoxes();
    const boxId = button.getAttribute('data-box');
    const box = document.getElementById(boxId);
    if(box) {
      box.style.display = 'block';
    }
  });
});

// Opcional: clicar fora da sidebar fecha as info-box da sidebar
document.addEventListener('click', function(event) {
  if (!event.target.closest('#sidebar') && !event.target.closest('#btn-menu')) {
    hideSidebarBoxes();
  }
});

