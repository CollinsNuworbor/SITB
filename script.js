// Get display element
let display = document.getElementById("display");

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

// Calculator Functions
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

function calculate() {
  if (!display) return;
  try {
    let result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
    setTimeout(() => {
      display.value = "";
    }, 1000);
  }
}
function openLanguages(){
    let box = document.getElementById("languages");

    if(box.style.display === "block"){
        box.style.display = "none";
    } else {
        box.style.display = "block";
    }
}
