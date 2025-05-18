// Elements
const leafCard = document.getElementById('leafCard');
const flipBtn = document.getElementById('flipBtn');
const sendBtn = document.getElementById('sendBtn');
const messageInput = document.querySelector('.leaf-message');
const signatureInput = document.querySelector('.leaf-signature');
const overlay = document.getElementById('overlay');

// Flip button toggles 'flipped' class on leaf card
flipBtn.addEventListener('click', () => {
  leafCard.classList.toggle('flipped');
});

// Send button validates inputs and simulates sending
sendBtn.addEventListener('click', () => {
  const message = messageInput.value.trim();
  const signature = signatureInput.value.trim();

  // Validate message length (roughly 3 sentences or more)
  if (message.length < 30) {
    alert('Please write a thoughtful message (at least 3 sentences).');
    return;
  }
  if (!signature) {
    alert('Please sign your name.');
    return;
  }

  // Show overlay with glowing tree (you can customize or add animation)
  overlay.style.display = 'flex';

  // Simulate animation and saving message
  setTimeout(() => {
    alert(`Message sent!\n\nMessage: ${message}\nSignature: ${signature}`);

    // Reset form & flip back leaf
    messageInput.value = '';
    signatureInput.value = '';
    if (leafCard.classList.contains('flipped')) {
      leafCard.classList.remove('flipped');
    }

    // Hide overlay
    overlay.style.display = 'none';

    // TODO: Save the leaf data to backend or localStorage here
  }, 2000);
});
