// Efeito de lettering
function aplicarLettering() {
  const mainText = document.getElementById('mainText');
  const texto = mainText.textContent;
  
  mainText.innerHTML = '';
  
  let delay = 0;
  for (let i = 0; i < texto.length; i++) {
    // Preserva espaços e quebras de linha
    if (texto[i] === ' ' || texto[i] === '\n' || texto[i] === '\r') {
      const espaco = document.createTextNode(texto[i]);
      mainText.appendChild(espaco);
    } else {
      const letra = document.createElement('span');
      letra.classList.add('letter');
      letra.textContent = texto[i];
      
      // Calcula o delay para cada letra
      letra.style.animationDelay = delay + 'ms';
      delay += 50; // Intervalo de 50ms entre cada letra
      
      mainText.appendChild(letra);
    }
  }
}

// Garante que o áudio será reproduzido mesmo com restrições de autoplay do Chrome
function iniciarAudio() {
  const audio = document.getElementById('backgroundMusic');
  if (audio) {
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log('Áudio iniciado com sucesso');
        })
        .catch(error => {
          console.log('Autoplay bloqueado - interação do usuário necessária', error);
        });
    }
  }
}

// Executa quando a página carrega
window.addEventListener('load', () => {
  aplicarLettering();
  iniciarAudio();
});

// Também tenta reproduzir ao primeiro clique/toque do usuário
document.addEventListener('click', () => {
  const audio = document.getElementById('backgroundMusic');
  if (audio && audio.paused) {
    audio.play().catch(error => console.log('Erro ao reproduzir áudio:', error));
  }
}, { once: true });

alert("Toque em qualquer lugar!")
