const stars = document.querySelectorAll('.star');
let selectedRating = 0;

stars.forEach(star => {
  star.addEventListener('click', () => {
    selectedRating = star.getAttribute('data-value');
    updateStars();
  });
});

function updateStars() {
  stars.forEach(star => {
    star.classList.toggle('active', star.getAttribute('data-value') <= selectedRating);
  });
}

document.getElementById('submitBtn').addEventListener('click', () => {
  const message = document.getElementById('messageBox').value.trim();
  if (!message) return;

  const comment = document.createElement('div');
  comment.className = 'comment';
  comment.innerHTML = `
    <div class="meta">Anonymous &bull; ${selectedRating || 'No'} star(s)</div>
    <div class="text">${message}</div>
  `;
  document.getElementById('commentSection').prepend(comment);

  // Reset
  document.getElementById('messageBox').value = '';
  selectedRating = 0;
  updateStars();
});
