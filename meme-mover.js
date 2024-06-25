// Get references to the HTML elements we'll be working with
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const memeImage = document.getElementById('memeImage');

// Variable to store the interval ID for the meme movement
let moveInterval;

// Function to enable the start button and disable the stop button
function enableStartButton() {
    startButton.disabled = false;
    stopButton.disabled = true;
}

// Function to disable the start button and enable the stop button
function enableStopButton() {
    startButton.disabled = true;
    stopButton.disabled = false;
}

// Function to move the meme image
function moveMeme() {
    // Get the dimensions of the viewport
    const maxX = window.innerWidth - memeImage.width;
    const maxY = window.innerHeight - memeImage.height;

    // Generate random positions within the viewport
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Apply the new position to the meme image
    memeImage.style.position = 'absolute';
    memeImage.style.left = `${randomX}px`;
    memeImage.style.top = `${randomY}px`;
}

// Function to start moving the meme
function startMoving() {
    // Enable the stop button and disable the start button
    enableStopButton();

    // Start moving the meme every 1000 milliseconds (1 second)
    moveInterval = setInterval(moveMeme, 1000);
}

// Function to stop moving the meme
function stopMoving() {
    // Enable the start button and disable the stop button
    enableStartButton();

    // Stop the meme movement
    clearInterval(moveInterval);
}

// Initialize the buttons' state
enableStartButton();