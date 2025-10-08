function trocarPagina(id) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  }

  async function postForm(url, form) {
    const formData = new FormData(form);
    const response = await fetch(url, { method: "POST", body: formData });
    return response.json();
  }

  document.getElementById("cadastroForm")?.addEventListener("submit", async function(e){
    e.preventDefault();
    const senha = document.getElementById("senhaCadastro").value;
    const confirmar = document.getElementById("confirmarSenha").value;
    if (senha !== confirmar) { alert("As senhas não coincidem!"); return; }
    const data = await postForm("cadastro.php", this);
    if (data.ok) { alert("Cadastro realizado!"); trocarPagina("login"); }
    else { alert("Erro: " + data.error); }
  });

  document.getElementById("loginForm")?.addEventListener("submit", async function(e){
    e.preventDefault();
    const data = await postForm("login.php", this);
    if (data.ok) { alert("Login feito com sucesso!"); }
    else { alert("Erro: " + data.error); }
  });

  document.getElementById("esqueciForm")?.addEventListener("submit", function(e){
    e.preventDefault(); trocarPagina("redefinir");
  });

  document.getElementById("redefinirForm")?.addEventListener("submit", async function(e){
    e.preventDefault();
    const senha = document.getElementById("novaSenha").value;
    const confirmar = document.getElementById("confirmarNovaSenha").value;
    if (senha !== confirmar) { alert("As senhas não coincidem!"); return; }
    const data = await postForm("redefinir.php", this);
    if (data.ok) { alert("Senha redefinida!"); trocarPagina("login"); }
    else { alert("Erro: " + data.error); }
  });
