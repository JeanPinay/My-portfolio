// Get the h1 element
const title = document.getElementById("title");

// Define a function to toggle the class
function toggleFlash() {
  title.classList.toggle("flash");
}
// Set an interval to toggle the class every 500ms
setInterval(toggleFlash, 2000);