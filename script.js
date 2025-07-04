 // Script para criar o efeito de rolagem infinita na galeria de produtos
document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.roll-produtos');
    if (!gallery) return;

    // 1. Clona todos os itens da galeria e os adiciona ao final.
    // Isso cria uma cópia exata para onde a rolagem pode "pular" de forma invisível.
    const items = Array.from(gallery.children);
    items.forEach(item => {
    const clone = item.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true'); // Esconde os clones de leitores de tela
    gallery.appendChild(clone);
    });

    // 2. Adiciona um listener para o evento de rolagem.
    gallery.addEventListener('scroll', () => {
    // Se a posição da rolagem passar do final do conteúdo original...
    if (gallery.scrollLeft >= gallery.scrollWidth / 2) {
        // ...ela é reiniciada para a posição correspondente no início, criando o loop.
        gallery.scrollLeft = gallery.scrollLeft - (gallery.scrollWidth / 2);
    }
    });
});