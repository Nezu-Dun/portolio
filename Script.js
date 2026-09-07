// Lightbox: click a thumbnail to view it full-resolution in an overlay
document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  if (!gallery) return;

  // Build the lightbox overlay once
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = `
    <span class="lightbox-close">&times;</span>
    <img class="lightbox-img" src="" alt="" />
  `;
  document.body.appendChild(overlay);

  const lightboxImg = overlay.querySelector('.lightbox-img');
  const closeBtn = overlay.querySelector('.lightbox-close');

  // Open on thumbnail click
  gallery.addEventListener('click', (e) => {
    const img = e.target.closest('.art-piece img');
    if (!img) return;
    // Use data-full if provided (for a separate high-res version), otherwise the thumbnail src itself
    lightboxImg.src = img.dataset.full || img.src;
    lightboxImg.alt = img.alt;
    overlay.classList.add('active');
  });

  // Close on click anywhere (overlay background, image, or the × button)
  overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
    lightboxImg.src = '';
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      overlay.classList.remove('active');
      lightboxImg.src = '';
    }
  });
});