let display = document.getElementById("display");
let historyList = document.getElementById("history");

// Navigation Room System
function showRoom(roomId) {
  // Hide all rooms
  const rooms = document.querySelectorAll('.room');
  rooms.forEach(room => {
    room.classList.remove('active');
  });
  
  // Show selected room
  const selectedRoom = document.getElementById(roomId);
  if (selectedRoom) {
    selectedRoom.classList.add('active');
  }
}

// Default: Show home room on page load
window.addEventListener('DOMContentLoaded', () => {
  showRoom('home');
});

function insert(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(display.value);
    addHistory(display.value + " = " + result);
    display.value = result;
  } catch {
    alert("Invalid Input");
    display.value = "";
  }
}

function sqrt() {
  let result = Math.sqrt(eval(display.value));
  addHistory("√(" + display.value + ") = " + result);
  display.value = result;
}

function sin() {
  let result = Math.sin(toRadians(eval(display.value)));
  addHistory("sin(" + display.value + ") = " + result);
  display.value = result;
}

function cos() {
  let result = Math.cos(toRadians(eval(display.value)));
  addHistory("cos(" + display.value + ") = " + result);
  display.value = result;
}

function tan() {
  let result = Math.tan(toRadians(eval(display.value)));
  addHistory("tan(" + display.value + ") = " + result);
  display.value = result;
}

function log() {
  let result = Math.log10(eval(display.value));
  addHistory("log(" + display.value + ") = " + result);
  display.value = result;
}

function pi() {
  display.value += Math.PI;
}

function e() {
  display.value += Math.E;
}

function fact() {
  let n = eval(display.value);
  let result = factorial(n);
  addHistory(n + "! = " + result);
  display.value = result;
}

function factorial(n) {
  if (n < 0) return NaN;
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

function toRadians(deg) {
  return deg * Math.PI / 180;
}

function addHistory(entry) {
  let li = document.createElement("li");
  li.textContent = entry;
  historyList.appendChild(li);
}