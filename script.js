// 1. Abrir o convite ao clicar no botão e reproduzir a música
function openInvitation() {
  const audio = document.getElementById('bg-music');
  const playBtn = document.getElementById('play-pause-btn');

  if (audio) {
    audio.play().then(() => {
      if (playBtn) playBtn.innerText = '⏸';
    }).catch(err => {
      console.log("Erro ao reproduzir áudio:", err);
    });
  }

  const mainContent = document.getElementById('main-content');
  if (mainContent) {
    mainContent.scrollIntoView({ behavior: 'smooth' });
  }
}

// 2. Controlar Música Flutuante manualmente
function toggleMusic() {
  const audio = document.getElementById('bg-music');
  const playBtn = document.getElementById('play-pause-btn');

  if (!audio) return;

  if (audio.paused) {
    audio.play().then(() => {
      playBtn.innerText = '⏸';
    }).catch(err => {
      console.log("Erro ao dar play:", err);
    });
  } else {
    audio.pause();
    playBtn.innerText = '▶';
  }
}

// 3. Contagem Regressiva para 18 de Dezembro de 2026
const targetDate = new Date('2026-12-18T10:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (daysEl) daysEl.innerText = days < 10 ? '0' + days : days;
    if (hoursEl) hoursEl.innerText = hours < 10 ? '0' + hours : hours;
    if (minutesEl) minutesEl.innerText = minutes < 10 ? '0' + minutes : minutes;
    if (secondsEl) secondsEl.innerText = seconds < 10 ? '0' + seconds : seconds;
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// 4. RSVP / Confirmação de Presença
function selecionarOpcao(elemento) {
  const cards = document.querySelectorAll('.radio-card');
  cards.forEach(card => card.classList.remove('active'));
  elemento.classList.add('active');
  
  const radio = elemento.querySelector('input[type="radio"]');
  if (radio) radio.checked = true;
}

document.addEventListener('DOMContentLoaded', function() {
  const rsvpForm = document.getElementById('rsvp-form');
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const nome1 = document.getElementById('nome1').value.trim();
      const nome2 = document.getElementById('nome2').value.trim();
      const presencaOpcao = document.querySelector('input[name="presenca"]:checked');
      const presenca = presencaOpcao ? presencaOpcao.value : 'sim';
      const dataHora = new Date().toLocaleString("pt-PT");

      let listaRSVP = JSON.parse(localStorage.getItem("registoRSVP") || "[]");
      listaRSVP.push({ nome1, nome2, presenca, data: dataHora });
      localStorage.setItem("registoRSVP", JSON.stringify(listaRSVP));

      const numeroWhatsApp = "258849301792";
      let texto = "";

      if (presenca === "sim") {
        texto = `*Confirmação de Presença - Casamento*%0A%0A`;
        texto += `Olá! Confirmamos a nossa presença! 🎉%0A%0A`;
        texto += `👤 *Convidado:* ${nome1}%0A`;
        if (nome2) texto += `👥 *Acompanhante:* ${nome2}%0A`;
      } else {
        texto = `*Aviso de Ausência - Casamento*%0A%0A`;
        texto += `Olá! Infelizmente não poderemos estar presentes no vosso grande dia. 💔%0A%0A`;
        texto += `👤 *Convidado:* ${nome1}%0A`;
        if (nome2) texto += `👥 *Acompanhante:* ${nome2}%0A`;
        texto += `%0ADesejamos toda a felicidade do mundo aos noivos!`;
      }

      window.open(`https://wa.me/${numeroWhatsApp}?text=${texto}`, '_blank');
      rsvpForm.reset();
    });
  }

  // 5. Mural de Mensagens
  const muralForm = document.getElementById("mural-form");
  if (muralForm) {
    muralForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const nome = document.getElementById("mural-nome").value.trim();
      const texto = document.getElementById("mural-texto").value.trim();

      if (!nome || !texto) return;

      const dataAtual = new Date().toLocaleDateString("pt-PT", {
        day: "numeric",
        month: "long",
        year: "numeric"
      });

      const novaMensagem = { nome, texto, data: dataAtual };
      let mensagens = JSON.parse(localStorage.getItem("muralMensagens") || "[]");
      mensagens.unshift(novaMensagem);
      localStorage.setItem("muralMensagens", JSON.stringify(mensagens));

      carregarMensagensDoStorage();
      muralForm.reset();
    });
  }

  carregarMensagensDoStorage();
  animarAoScroll();
});

// Funções do Mural
function carregarMensagensDoStorage() {
  const muralCards = document.getElementById("mural-cards");
  if (!muralCards) return;

  const mensagensGuardadas = JSON.parse(localStorage.getItem("muralMensagens") || "[]");
  let htmlConteudo = `
      <div class="mural-card">
        <h4>Maria João</h4>
        <span class="mural-date">10 de Outubro, 2026</span>
        <p>"Desejo toda a felicidade do mundo a vocês dois! Que este amor seja eterno."</p>
        <span class="mural-footer">Com carinho</span>
      </div>
  `;

  mensagensGuardadas.forEach(msg => {
    htmlConteudo += `
      <div class="mural-card">
        <h4>${escapeHtml(msg.nome)}</h4>
        <span class="mural-date">${msg.data}</span>
        <p>"${escapeHtml(msg.texto)}"</p>
        <span class="mural-footer">Com carinho</span>
      </div>
    `;
  });

  muralCards.innerHTML = htmlConteudo;
}

function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

// 6. Detalhes de Pagamento (M-Pesa / Banco)
function toggleDetalhes(tipo) {
  const mpesa = document.getElementById('detalhes-mpesa');
  const banco = document.getElementById('detalhes-banco');

  if (tipo === 'mpesa') {
    if (mpesa.style.display === 'block') {
      mpesa.style.display = 'none';
    } else {
      mpesa.style.display = 'block';
      if (banco) banco.style.display = 'none';
    }
  } else if (tipo === 'banco') {
    if (banco.style.display === 'block') {
      banco.style.display = 'none';
    } else {
      banco.style.display = 'block';
      if (mpesa) mpesa.style.display = 'none';
    }
  }
}

// 7. Escolha de Presentes da Lista
function escolherPresente(presente, btn) {
  const dataHora = new Date().toLocaleString("pt-PT");
  let registos = JSON.parse(localStorage.getItem("registosPresentes") || "[]");
  
  if (!registos.some(item => item.presente === presente)) {
    registos.push({ presente: presente, data: dataHora });
    localStorage.setItem("registosPresentes", JSON.stringify(registos));
  }

  marcarComoEscolhido(btn);

  const numeroTelefone = "258849301792";
  const textoMensagem = `Olá! O presente escolhido na lista do site: 🎁 *${presente}* (Data: ${dataHora})`;
  const urlWhatsapp = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(textoMensagem)}`;

  window.open(urlWhatsapp, "_blank");
}

function marcarComoEscolhido(btn) {
  btn.innerText = "Presente Escolhido";
  btn.style.backgroundColor = "#999999";
  btn.style.cursor = "not-allowed";
  btn.disabled = true;
}

// 8. Gestão Dinâmica de Convidados e Painel Privado (Código: Larissa)
function obterListaConvidadosDinamica() {
  let salvos = localStorage.getItem("listaConvidadosCustomizada");
  if (salvos) {
    return JSON.parse(salvos);
  } else {
    if (typeof listaConvidados !== 'undefined') {
      localStorage.setItem("listaConvidadosCustomizada", JSON.stringify(listaConvidados));
      return listaConvidados;
    }
    return [];
  }
}

function abrirPainelSecreto() {
  const codigo = prompt("Digite o código de acesso:");
  if (codigo === "Larissa") {
    document.getElementById('modalPainel').style.display = 'flex';
    atualizarPainelAdminRSVP();
    atualizarInterfaceEHistoricoPresentes();
    atualizarPainelAdminConvidados();
  } else if (codigo !== null) {
    alert("Código incorreto!");
  }
}

function fecharPainelSecreto() {
  document.getElementById('modalPainel').style.display = 'none';
}

function atualizarPainelAdminConvidados() {
  const container = document.getElementById("listaGestaoConvidados");
  if (!container) return;

  const convidados = obterListaConvidadosDinamica();
  container.innerHTML = "";

  if (convidados.length === 0) {
    container.innerHTML = "<p style='color: #888; font-size: 0.8rem;'>Nenhum convidado registado.</p>";
    return;
  }

  convidados.forEach((item, index) => {
    const div = document.createElement("div");
    div.style.cssText = "display: flex; justify-content: space-between; align-items: center; background: #fff; padding: 8px 10px; margin-bottom: 6px; border-radius: 8px; border: 1px solid #e0d5c1;";
    
    div.innerHTML = `
      <div style="font-size: 0.8rem; color: #333;">
        <strong>${item.nome}</strong><br>
        <span style="color: #c5a059; font-size: 0.75rem;">📍 ${item.mesa}</span>
      </div>
      <div style="display: flex; gap: 5px;">
        <button onclick="editarConvidado(${index})" style="background: #3498db; color: white; border: none; padding: 4px 8px; border-radius: 4px; font-size: 0.65rem; cursor: pointer;">Editar</button>
        <button onclick="excluirConvidado(${index})" style="background: #e74c3c; color: white; border: none; padding: 4px 8px; border-radius: 4px; font-size: 0.65rem; cursor: pointer;">Excluir</button>
      </div>
    `;
    container.appendChild(div);
  });
}

function adicionarConvidadoForm(event) {
  event.preventDefault();
  const nome = document.getElementById("novoNomeConvidado").value.trim();
  const mesa = document.getElementById("novaMesaConvidado").value.trim();

  if (!nome || !mesa) return;

  let convidados = obterListaConvidadosDinamica();
  convidados.push({ nome: nome, mesa: mesa, confirmado: true });
  
  localStorage.setItem("listaConvidadosCustomizada", JSON.stringify(convidados));
  
  document.getElementById("formAdicionarConvidado").reset();
  atualizarPainelAdminConvidados();
  alert("Convidado adicionado com sucesso!");
}

function excluirConvidado(index) {
  if (confirm("Tens a certeza que pretendes excluir este convidado?")) {
    let convidados = obterListaConvidadosDinamica();
    convidados.splice(index, 1);
    localStorage.setItem("listaConvidadosCustomizada", JSON.stringify(convidados));
    atualizarPainelAdminConvidados();
  }
}

function editarConvidado(index) {
  let convidados = obterListaConvidadosDinamica();
  let item = convidados[index];

  const novoNome = prompt("Editar nome do convidado:", item.nome);
  if (novoNome === null) return;

  const novaMesa = prompt("Editar nome/número da mesa:", item.mesa);
  if (novaMesa === null) return;

  if (novoNome.trim() && novaMesa.trim()) {
    convidados[index].nome = novoNome.trim();
    convidados[index].mesa = novaMesa.trim();
    localStorage.setItem("listaConvidadosCustomizada", JSON.stringify(convidados));
    atualizarPainelAdminConvidados();
    alert("Convidado atualizado com sucesso!");
  }
}

function limparTexto(texto) {
  if (!texto) return "";
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function nomesCoincidem(nomeBuscado, nomeCadastrado) {
  const busca = limparTexto(nomeBuscado);
  const cadastro = limparTexto(nomeCadastrado);

  if (!busca) return false;
  if (cadastro.includes(busca) || busca.includes(cadastro)) return true;

  const palavrasBusca = busca.split(/\s+/);
  const palavrasCadastro = cadastro.split(/\s+/);

  if (palavrasBusca.every(palavra => cadastro.includes(palavra))) return true;
  if (palavrasCadastro.every(palavra => busca.includes(palavra))) return true;

  return false;
}

function executarPesquisaMesa() {
  const inputElement = document.getElementById('searchInput');
  const resultsDiv = document.getElementById('results');
  
  if (!inputElement || !resultsDiv) return;

  const termoDigitado = inputElement.value;
  resultsDiv.innerHTML = '';

  if (!termoDigitado.trim()) {
    resultsDiv.innerHTML = '<p style="color: #e74c3c; font-size: 0.85rem; margin-top: 10px;">Por favor, digite o seu nome para pesquisar.</p>';
    return;
  }

  const listaAtual = obterListaConvidadosDinamica();
  const encontrados = listaAtual.filter(c => nomesCoincidem(termoDigitado, c.nome));

  if (encontrados.length === 0) {
    resultsDiv.innerHTML = '<p style="color: #666; font-size: 0.9rem; margin-top: 10px;">Nenhum convidado encontrado com esse nome.</p>';
    return;
  }

  encontrados.forEach(item => {
    const card = document.createElement('div');
    card.style.cssText = "background: #ffffff; border: 1px solid #c5a059; border-radius: 16px; padding: 15px; margin-top: 10px; box-shadow: 0 4px 10px rgba(197, 160, 89, 0.15); text-align: left;";
    card.innerHTML = `
      <div style="font-weight: bold; color: #222; font-size: 1rem;">👤 ${item.nome}</div>
      <div style="color: #c5a059; font-weight: bold; margin-top: 6px; font-size: 1.05rem;">📍 ${item.mesa}</div>
    `;
    resultsDiv.appendChild(card);
  });
}

function atualizarPainelAdminRSVP() {
  const listaHtml = document.getElementById("listaRegistoRSVP");
  if (!listaHtml) return;

  const registos = JSON.parse(localStorage.getItem("registoRSVP") || "[]");
  listaHtml.innerHTML = "";

  if (registos.length === 0) {
    listaHtml.innerHTML = "<li style='color: #888;'>Nenhuma confirmação de presença registada ainda.</li>";
    return;
  }

  registos.forEach(reg => {
    const li = document.createElement("li");
    li.style.marginBottom = "6px";
    let statusCor = reg.presenca === "sim" ? "color: #27ae60;" : "color: #e74c3c;";
    let statusTexto = reg.presenca === "sim" ? "Confirmado (Sim)" : "Não poderá ir";
    
    li.innerHTML = `<strong>${reg.nome1}</strong> ${reg.nome2 ? 'e ' + reg.nome2 : ''} — <span style="${statusCor} font-weight: bold;">${statusTexto}</span> <span style="color: #777; font-size: 0.7rem;">(${reg.data})</span>`;
    listaHtml.appendChild(li);
  });
}

function limparRegistoRSVP() {
  if (confirm("Tem certeza que deseja limpar o histórico de confirmações?")) {
    localStorage.removeItem("registoRSVP");
    atualizarPainelAdminRSVP();
  }
}

function atualizarInterfaceEHistoricoPresentes() {
  const registos = JSON.parse(localStorage.getItem("registosPresentes") || "[]");
  const listaHtml = document.getElementById("listaRegistosInternos");
  if (!listaHtml) return;
  
  listaHtml.innerHTML = "";

  if (registos.length === 0) {
    listaHtml.innerHTML = "<li style='color: #888;'>Nenhum presente escolhido até o momento.</li>";
    return;
  }

  registos.forEach(reg => {
    const li = document.createElement("li");
    li.style.marginBottom = "4px";
    li.innerHTML = `<strong>${reg.presente}</strong> <span style="color: #777; font-size: 0.75rem;">(${reg.data})</span>`;
    listaHtml.appendChild(li);
  });
}

function limparRegistosPresentes() {
  if (confirm("Tem certeza que deseja limpar o histórico de presentes?")) {
    localStorage.removeItem("registosPresentes");
    atualizarInterfaceEHistoricoPresentes();
  }
}

// 9. Efeito de animação ao fazer scroll
function animarAoScroll() {
  const elementos = document.querySelectorAll('.reveal');
  const alturaJanela = window.innerHeight;

  elementos.forEach(elemento => {
    const rect = elemento.getBoundingClientRect();
    if (rect.top < alturaJanela * 0.85 && rect.bottom > 0) {
      elemento.classList.add('active');
    } else {
      elemento.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', animarAoScroll);