setTimeout(() => {
    window.location.href = '/index.html';
}, 4000);

// Function to be called when the button is clicked
function myFunction() {
    // alert("Button was clicked!");
    window.location = 'splash.html';
}

// Select the button using its ID
const button = document.getElementById('createbtn');

// Add an event listener to the button
button.addEventListener('click', myFunction);


