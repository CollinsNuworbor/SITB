// Get display element
const display = document.getElementById("display");

// Navigation
function showRoom(roomId) {
    const rooms = document.querySelectorAll(".room");

    rooms.forEach(room => {
        room.classList.remove("active");
    });

    const selectedRoom = document.getElementById(roomId);
    if (selectedRoom) {
        selectedRoom.classList.add("active");
    }
}

// Show Home when the page loads
window.onload = function () {
    showRoom("home");
};

// Calculator
function insert(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    const display = document.getElementById("display");

    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}

// Language Menu
function openLanguages() {
    const box = document.getElementById("languages");

    if (box.style.display === "block") {
        box.style.display = "none";
    } else {
        box.style.display = "block";
    }
}
