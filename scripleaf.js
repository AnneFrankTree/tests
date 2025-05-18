body {
  margin: 0;
  padding: 0;
  font-family: 'Georgia', serif;
  background: url('images/background.jpg') no-repeat center center fixed;
  background-size: cover;
  color: #4a3b2b;
}

header {
  text-align: center;
  padding: 30px 0 10px;
  font-size: 1.5em;
}

main {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 60px;
  padding: 40px;
}

.instructions-box {
  background-color: rgba(255, 255, 240, 0.9);
  border: 1px solid #cbbfa3;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  border-radius: 10px;
  padding: 30px;
  width: 300px;
  font-size: 18px;
  line-height: 1.6;
  position: relative;
}

.instructions-box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  background: url('images/decorative-vine.png') no-repeat top left;
  width: 100px;
  height: 100px;
  opacity: 0.2;
}

.leaf-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.leaf-container {
  position: relative;
  width: 320px;
  height: auto;
}

.leaf-image {
  width: 100%;
}

.message-area {
  position: absolute;
  top: 30%;
  left: 18%;
  width: 64%;
  height: 35%;
  border: none;
  background-color: rgba(255, 255, 255, 0.35);
  font-family: 'Georgia', serif;
  font-size: 16px;
  padding: 10px;
  resize: none;
  outline: none;
  box-shadow: inset 0 0 4px rgba(0,0,0,0.2);
  border-radius: 8px;
}

.name-input {
  margin-top: 20px;
  padding: 8px 12px;
  border: none;
  border-bottom: 2px solid #4a3b2b;
  font-family: 'Georgia', serif;
  background: transparent;
  font-size: 16px;
  width: 200px;
  text-align: center;
}

.buttons {
  margin-top: 20px;
  display: flex;
  gap: 20px;
}

.flip-btn,
.send-btn {
  font-family: 'Georgia', serif;
  background-color: #f3e8d2;
  border: 1px solid #b29d7d;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s ease;
}

.flip-btn:hover,
.send-btn:hover {
  background-color: #e2d5b8;
}
