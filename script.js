document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

// Efeito de destaque nos cards ao passar o mouse
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 0 24px 4px #fff3';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '';
  });
});

// Efeito de digitação no título de boas-vindas
const titulo = document.querySelector('.boas-vindas-titulo');
if (titulo) {
  const texto = titulo.textContent;
  titulo.textContent = '';
  let i = 0;
  const typing = setInterval(() => {
    titulo.textContent += texto[i];
    i++;
    if (i >= texto.length) clearInterval(typing);
  }, 70);
}

// Suavizar scroll nos links do menu
document.querySelectorAll('.navegacao__links a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const logo = document.querySelector('.navegacao__imagem img');
const audio = document.getElementById('musica-fundo');

if (logo && audio) {
  logo.addEventListener('mouseenter', () => {
    audio.muted = false;
    audio.play();
  });
}

// Animação dos cards só quando a seção jogadores aparece na tela
const secaoJogadores = document.getElementById('equipe');
const cards = document.querySelectorAll('.card');

if (secaoJogadores && cards.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        cards.forEach((card, i) => {
          setTimeout(() => card.classList.add('visible'), 150 * i);
        });
        observer.disconnect(); // só anima uma vez
      }
    });
  }, { threshold: 0.2 });

  observer.observe(secaoJogadores);
}