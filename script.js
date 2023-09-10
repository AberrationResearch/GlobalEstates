// Initialize the map
var map = L.map('map').setView([0, 0], 2); // Set the initial map view to coordinates (0, 0) with zoom level 2
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Define property data (latitude, longitude, property name, and price)
var properties = [
    { lat: 40.7128, lon: -74.0060, name: 'New York Property', price: '$1,000,000' },
    { lat: 51.5074, lon: -0.1278, name: 'London Property', price: '$800,000' },
    // Add more properties as needed
];

// Create property markers and pop-up buttons
properties.forEach(function(property) {
    var marker = L.marker([property.lat, property.lon]).addTo(map);
    var popupContent = `
        <strong>${property.name}</strong><br>
        Location: ${property.lat}, ${property.lon}<br>
        Price: ${property.price}<br>
        <button onclick="buyProperty('${property.name}')">Buy</button>
    `;
    marker.bindPopup(popupContent);
});

// Function to handle property purchase
function buyProperty(propertyName) {
    // Implement your logic here, such as updating the game state
    alert(`Congratulations! You have bought ${propertyName}.`);
}

// JavaScript code for menu interactions
var menu = document.getElementById("menu");
var startButton = document.getElementById("start-button");
var resumeButton = document.getElementById("resume-button");
var settingsButton = document.getElementById("settings-button");
var exitButton = document.getElementById("exit-button");

startButton.addEventListener("click", startGame);
resumeButton.addEventListener("click", resumeGame);
settingsButton.addEventListener("click", openSettings);
exitButton.addEventListener("click", exitGame);

function startGame() {
    // Implement logic to start the game
    // For now, let's just hide the menu
    hideMenu();
}

function resumeGame() {
    // Implement logic to resume the game
    // For now, let's just hide the menu
    hideMenu();
}

function openSettings() {
    // Implement logic to open the settings menu
    // For now, let's just hide the menu
    hideMenu();
}

function exitGame() {
    // Implement logic to exit the game
    // For now, let's just hide the menu
    hideMenu();
}

function showMenu() {
    menu.style.display = "block";
}

function hideMenu() {
    menu.style.display = "none";
}
