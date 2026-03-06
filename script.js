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

// Executa quando a página carrega
window.addEventListener('load', aplicarLettering);
