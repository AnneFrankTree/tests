const leafCard = document.getElementById('leafCard');
const flipBtn = document.getElementById('flipBtn');
const sendBtn = document.getElementById('sendBtn');

// Flip button toggles 'flipped' class on leaf card
flipBtn.addEventListener('click', () => {
  leafCard.classList.toggle('flipped');
});

// Send button handler
sendBtn.addEventListener('click', async () => {
  const message = messageInput.value.trim();
  const signature = signatureInput.value.trim();

  // Validate message length (~3 sentences)
  if (message.length < 30) {
    alert('Please write a thoughtful message (at least 3 sentences).');
    return;
  }
  if (!signature) {
    alert('Please sign your name.');
    return;
  }




import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.7.3/firebase-firestore.js";

// Firebase config & initialization
const firebaseConfig = {
  apiKey: "AIzaSyCJC1HnvrzTmQZ33bKB58KEArHoU9MCWsI",
  authDomain: "annefrankleaves.firebaseapp.com",
  projectId: "annefrankleaves",
  storageBucket: "annefrankleaves.firebasestorage.app",
  messagingSenderId: "239156775586",
  appId: "1:239156775586:web:d12e394fafb0c9bb9e65fb"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// DOM Elements
const messageInput = document.querySelector('.leaf-message');
const signatureInput = document.querySelector('.leaf-signature');
const overlay = document.getElementById('overlay');
const glowTree = document.querySelector('.glow-tree');

// Sample branch coordinates (relative to glowing tree container, in pixels)
// Adjust these to match your tree image branches
const branchCoordinates = [
  { x: 426, y: 100.88888835906982 },
  { x: 452, y: 88.88888835906982 },
  { x: 476, y: 114.88888835906982 },
  { x: 503, y: 93.88888835906982 },
  { x: 529, y: 87.88888835906982 },
  { x: 545, y: 83.88888835906982 },
  { x: 566, y: 106.88888835906982 },
  { x: 590, y: 80.88888835906982 },
  { x: 617, y: 84.88888835906982 },
  { x: 629, y: 113.88888835906982 },
  { x: 663, y: 84.88888835906982 },
  { x: 683, y: 88.88888835906982 },
  { x: 698, y: 106.88888835906982 },
  { x: 729, y: 105.88888835906982 },
  { x: 703, y: 157.88888835906982 },
  { x: 694, y: 188.88888835906982 },
  { x: 663, y: 162.88888835906982 },
  { x: 625, y: 181.88888835906982 },
  { x: 635, y: 225.88888835906982 },
  { x: 665, y: 225.88888835906982 },
  { x: 642, y: 271.8888883590698 },
  { x: 624, y: 287.8888883590698 },
  { x: 588, y: 250.88888835906982 },
  { x: 548, y: 256.8888883590698 },
  { x: 527, y: 226.88888835906982 },
  { x: 540, y: 340.8888883590698 },
  { x: 516, y: 359.8888883590698 },
  { x: 526, y: 410.8888883590698 },
  { x: 534, y: 447.8888883590698 },
  { x: 490, y: 410.8888883590698 },
  { x: 491, y: 369.8888883590698 },
  { x: 468, y: 346.8888883590698 },
  { x: 480, y: 326.8888883590698 },
  { x: 452, y: 310.8888883590698 },
  { x: 406, y: 288.8888883590698 },
  { x: 380, y: 277.8888883590698 },
  { x: 385, y: 248.88888835906982 },
  { x: 382, y: 216.88888835906982 },
  { x: 353, y: 220.88888835906982 },
  { x: 339, y: 194.88888835906982 },
  { x: 312, y: 196.88888835906982 },
  { x: 289, y: 236.88888835906982 },
  { x: 324, y: 245.88888835906982 },
  { x: 340, y: 292.8888883590698 },
  { x: 273, y: 267.8888883590698 },
  { x: 300, y: 318.8888883590698 },
  { x: 320, y: 354.8888883590698 },
  { x: 287, y: 355.8888883590698 },
  { x: 275, y: 330.8888883590698 },
  { x: 247, y: 304.8888883590698 },
  { x: 244, y: 338.8888883590698 },
  { x: 245, y: 389.8888883590698 },
  { x: 278, y: 419.8888883590698 },
  { x: 252, y: 430.8888883590698 },
  { x: 288, y: 463.8888883590698 },
  { x: 327, y: 485.8888883590698 },
  { x: 263, y: 474.8888883590698 },
  { x: 279, y: 496.8888883590698 },
  { x: 252, y: 498.8888883590698 },
  { x: 312, y: 505.8888883590698 },
  { x: 359, y: 498.8888883590698 },
  { x: 397, y: 496.8888883590698 },
  { x: 373, y: 514.8888883590698 },
  { x: 340, y: 539.8888883590698 },
  { x: 299, y: 538.8888883590698 },
  { x: 316, y: 554.8888883590698 },
  { x: 377, y: 558.8888883590698 },
  { x: 372, y: 586.8888883590698 },
  { x: 428, y: 595.8888883590698 },
  { x: 455, y: 576.8888883590698 },
  { x: 444, y: 604.8888883590698 },
  { x: 460, y: 560.8888883590698 },
  { x: 428, y: 546.8888883590698 },
  { x: 478, y: 541.8888883590698 },
  { x: 523, y: 534.8888883590698 },
  { x: 676, y: 498.8888883590698 },
  { x: 683, y: 458.8888883590698 },
  { x: 708, y: 450.8888883590698 },
  { x: 693, y: 552.8888883590698 },
  { x: 707, y: 578.8888883590698 },
  { x: 734, y: 602.8888883590698 },
  { x: 739, y: 551.8888883590698 },
  { x: 746, y: 574.8888883590698 },
  { x: 785, y: 579.8888883590698 },
  { x: 774, y: 597.8888883590698 },
  { x: 786, y: 583.8888883590698 },
  { x: 812, y: 561.8888883590698 },
  { x: 841, y: 581.8888883590698 },
  { x: 860, y: 555.8888883590698 },
  { x: 851, y: 535.8888883590698 },
  { x: 800, y: 528.8888883590698 },
  { x: 780, y: 515.8888883590698 },
  { x: 797, y: 493.8888883590698 },
  { x: 822, y: 474.8888883590698 },
  { x: 846, y: 454.8888883590698 },
  { x: 891, y: 467.8888883590698 },
  { x: 860, y: 493.8888883590698 },
  { x: 908, y: 490.8888883590698 },
  { x: 910, y: 522.8888883590698 },
  { x: 924, y: 446.8888883590698 },
  { x: 900, y: 430.8888883590698 },
  { x: 930, y: 413.8888883590698 },
  { x: 884, y: 416.8888883590698 },
  { x: 853, y: 424.8888883590698 },
  { x: 841, y: 399.8888883590698 },
  { x: 859, y: 378.8888883590698 },
  { x: 880, y: 346.8888883590698 },
  { x: 900, y: 318.8888883590698 },
  { x: 927, y: 325.8888883590698 },
  { x: 921, y: 359.8888883590698 },
  { x: 845, y: 341.8888883590698 },
  { x: 817, y: 363.8888883590698 },
  { x: 816, y: 344.8888883590698 },
  { x: 759, y: 427.8888883590698 },
  { x: 678, y: 495.8888883590698 },
  { x: 683, y: 459.8888883590698 },
  { x: 716, y: 447.8888883590698 },
  { x: 636, y: 358.8888883590698 },
  { x: 672, y: 345.8888883590698 },
  { x: 672, y: 318.8888883590698 },
  { x: 671, y: 138.88888835906982 },
  { x: 643, y: 175.88888835906982 },
  { x: 629, y: 119.88888835906982 },
  { x: 680, y: 87.88888835906982 },
  { x: 661, y: 74.88888835906982 },
  { x: 623, y: 65.88888835906982 },
  { x: 606, y: 102.88888835906982 },
  { x: 590, y: 74.88888835906982 },
  { x: 564, y: 114.88888835906982 },
  { x: 547, y: 105.88888835906982 },
  { x: 532, y: 90.88888835906982 },
  { x: 556, y: 202.88888835906982 },
  { x: 541, y: 180.88888835906982 },
  { x: 504, y: 98.88888835906982 },
  { x: 480, y: 113.88888835906982 },
  { x: 455, y: 93.88888835906982 },
  { x: 437, y: 162.88888835906982 }
];


// Flip button toggles 'flipped' class on leaf card
flipBtn.addEventListener('click', () => {
  leafCard.classList.toggle('flipped');
});

// Send button handler
sendBtn.addEventListener('click', async () => {
  const message = messageInput.value.trim();
  const signature = signatureInput.value.trim();

  // Validate message length (~3 sentences)
  if (message.length < 30) {
    alert('Please write a thoughtful message (at least 3 sentences).');
    return;
  }
  if (!signature) {
    alert('Please sign your name.');
    return;
  }

  try {
    // Choose random branch coordinate
    const branch = branches[Math.floor(Math.random() * branches.length)];

    // Save to Firestore: message, signature, timestamp, branch position
    await addDoc(collection(db, "leaves"), {
      message,
      signature,
      createdAt: serverTimestamp(),
      branchX: branch.x,
      branchY: branch.y
    });

    // Animate leaf to branch and show overlay glowing tree
    await animateLeafToBranch(branch);

    // Reset form and leaf flip
    messageInput.value = '';
    signatureInput.value = '';
    leafCard.classList.remove('flipped');

    alert('Your leaf has been sent to the tree. Thank you!');

  } catch (error) {
    console.error("Error sending leaf:", error);
    alert('Sorry, there was an error sending your leaf. Please try again.');
  }
});

function animateLeafToBranch(branch) {
  return new Promise((resolve) => {
    // Show overlay and glowing tree
    overlay.style.display = 'flex';

    // Get bounding rectangles for positioning
    const leafRect = leafCard.getBoundingClientRect();
    const treeRect = glowTree.getBoundingClientRect();

    // Calculate leafCard’s current position relative to viewport
    const startX = leafRect.left;
    const startY = leafRect.top;

    // Calculate target position (branch) relative to viewport
    const targetX = treeRect.left + branch.x;
    const targetY = treeRect.top + branch.y;

    // Clone leafCard to animate
    const animLeaf = leafCard.cloneNode(true);
    animLeaf.style.position = 'fixed';
    animLeaf.style.left = `${startX}px`;
    animLeaf.style.top = `${startY}px`;
    animLeaf.style.margin = '0';
    animLeaf.style.transition = 'transform 2s ease-in-out, opacity 2s ease-in-out';
    animLeaf.style.zIndex = '9999';
    animLeaf.style.pointerEvents = 'none';
    animLeaf.classList.remove('flipped'); // Animate front side for consistency

    document.body.appendChild(animLeaf);

    // Force reflow for transition to apply
    animLeaf.getBoundingClientRect();

    // Calculate translation and scale for flying + shrinking
    const deltaX = targetX - startX;
    const deltaY = targetY - startY;

    // Animate leaf moving and shrinking
    animLeaf.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.3)`;
    animLeaf.style.opacity = '0.8';

    // After animation ends
    animLeaf.addEventListener('transitionend', () => {
      // Remove animated leaf from DOM
      animLeaf.remove();

      // Hide overlay
      overlay.style.display = 'none';

      resolve();
    }, { once: true });
  });
}
