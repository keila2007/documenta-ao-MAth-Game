// Função para mostrar/ocultar as caixas de informação
function toggleBox(id) {
  // Oculta todas as caixas de informações primeiro
  document.querySelectorAll('.info-box').forEach(box => {
    box.style.display = 'none';
  });

  // Mostra apenas a caixa correspondente ao botão clicado
  let box = document.getElementById(id);
  if (box) {
    box.style.display = 'block';
    
    // Fecha automaticamente após 5 segundos (opcional)
    setTimeout(() => {
      if (box.style.display === 'block') {
        box.style.display = 'none';
      }
    }, 5000);
  }
}

// Atribui o evento de clique aos botões
document.getElementById("btn-control").onclick = function() {
  toggleBox('box-control');
};

document.getElementById("btn-key").onclick = function() {
  toggleBox('box-key');
};

document.getElementById("btn-trophy").onclick = function() {
  toggleBox('box-trophy');
};

// Fecha as caixas ao clicar fora
document.addEventListener("click", function(event) {
  const isIconButton = event.target.closest('.icon-btn');
  const isInfoBox = event.target.closest('.info-box');
  
  if (!isIconButton && !isInfoBox) {
    document.querySelectorAll('.info-box').forEach(box => {
      box.style.display = 'none';
    });
  }
});

// Sidebar functionality
const btnMenu = document.getElementById('btn-menu');
const sidebar = document.getElementById('sidebar');

// Abre/fecha a sidebar
btnMenu.addEventListener('click', function(event) {
  event.stopPropagation();
  sidebar.classList.toggle('open');
  
  // Fecha todas as info-boxes quando abrir a sidebar
  document.querySelectorAll('.info-box').forEach(box => {
    box.style.display = 'none';
  });
});

// Fecha a sidebar ao clicar fora
document.addEventListener('click', function(event) {
  if (sidebar.classList.contains('open') && 
      !sidebar.contains(event.target) && 
      !btnMenu.contains(event.target)) {
    sidebar.classList.remove('open');
  }
});

// Fecha a sidebar com ESC
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    sidebar.classList.remove('open');
    document.querySelectorAll('.info-box').forEach(box => {
      box.style.display = 'none';
    });
  }
});

// Função para telas de notebook
function handleNotebookLayout() {
  const isNotebook = window.innerWidth >= 769 && window.innerWidth <= 1366;
  
  if (isNotebook) {
    // Garante espaçamento adequado
    document.querySelectorAll('.icon-wrapper').forEach(wrapper => {
      wrapper.style.margin = '0 15px';
    });
  }
}

window.addEventListener('resize', handleNotebookLayout);
window.addEventListener('load', handleNotebookLayout);

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
  console.log('Layout notebook otimizado!');
  handleNotebookLayout();
});
