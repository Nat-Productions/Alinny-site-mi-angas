document.addEventListener('DOMContentLoaded', () => {
  // --- Lógica do Dropdown de Perfil ---
  const profileButton = document.getElementById('profile-button');
  const profileDropdown = document.getElementById('profile-dropdown');

  if (profileButton && profileDropdown) {
    const toggleDropdown = () => {
      const isExpanded = profileButton.getAttribute('aria-expanded') === 'true';
      profileButton.setAttribute('aria-expanded', !isExpanded);
      profileDropdown.classList.toggle('is-open');
    };

    profileButton.addEventListener('click', (e) => {
      e.stopPropagation(); // Impede que o clique se propague para o window
      toggleDropdown();
    });

    window.addEventListener('click', () => {
      if (profileDropdown.classList.contains('is-open')) {
        toggleDropdown();
      }
    });
  }

  // --- Lógica da Galeria com Rolagem Infinita ---
  const gallery = document.querySelector('.roll-produtos');
  if (gallery) {
    // Clona todos os itens da galeria para criar o efeito de loop.
    const items = Array.from(gallery.children);
    items.forEach(item => {
      const clone = item.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true'); // Esconde os clones de leitores de tela
      gallery.appendChild(clone);
    });

    gallery.addEventListener('scroll', () => {
      // Se a rolagem passar da metade, reinicia para o início de forma invisível.
      if (gallery.scrollLeft >= gallery.scrollWidth / 2) {
        gallery.scrollLeft -= gallery.scrollWidth / 2;
      }
    });
  }
});