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

function insert(value) {
  if (display) {
    display.value += value;
  }
}

function clearDisplay() {
  if (display) {
    display.value = "";
  }
}

function backspace() {
  if (display) {
    display.value = display.value.slice(0, -1);
  }
}

function calculate() {
  if (!display) return;
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
  if (!display) return;
  try {
    let result = Math.sqrt(eval(display.value));
    addHistory("√(" + display.value + ") = " + result);
    display.value = result;
  } catch {
    alert("Invalid Input");
  }
}

function sin() {
  if (!display) return;
  try {
    let result = Math.sin(toRadians(eval(display.value)));
    addHistory("sin(" + display.value + ") = " + result);
    display.value = result;
  } catch {
    alert("Invalid Input");
  }
}

function cos() {
  if (!display) return;
  try {
    let result = Math.cos(toRadians(eval(display.value)));
    addHistory("cos(" + display.value + ") = " + result);
    display.value = result;
  } catch {
    alert("Invalid Input");
  }
}

function tan() {
  if (!display) return;
  try {
    let result = Math.tan(toRadians(eval(display.value)));
    addHistory("tan(" + display.value + ") = " + result);
    display.value = result;
  } catch {
    alert("Invalid Input");
  }
}

function log() {
  if (!display) return;
  try {
    let result = Math.log10(eval(display.value));
    addHistory("log(" + display.value + ") = " + result);
    display.value = result;
  } catch {
    alert("Invalid Input");
  }
}

function pi() {
  if (display) {
    display.value += Math.PI;
  }
}

function e() {
  if (display) {
    display.value += Math.E;
  }
}

function fact() {
  if (!display) return;
  try {
    let n = eval(display.value);
    let result = factorial(n);
    addHistory(n + "! = " + result);
    display.value = result;
  } catch {
    alert("Invalid Input");
  }
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
  if (historyList) {
    let li = document.createElement("li");
    li.textContent = entry;
    historyList.appendChild(li);
  }
}