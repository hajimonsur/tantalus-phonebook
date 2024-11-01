setTimeout(() => {
    window.location.href = '/pages/index.html';
}, 3000);

// Function to be called when the create button is clicked
function gocreatebtn() {
    // alert("Button was clicked!");
    window.location = '/pages/create.html';
}

// Select the button using its ID
const button = document.getElementById('createbtn');

// Add an event listener to the button
button.addEventListener('click', gocreatebtn);


// Function to be called when the view button is clicked
function goviewbtn() {
    // alert("Button was clicked!");
    window.location = '/pages/allcontact.html';
}

// Select the button using its ID
const viewbtn = document.getElementById('allbtn');

// Add an event listener to the button
viewbtn.addEventListener('click', goviewbtn);


// handle index back button
let backbtn = document.getElementById("backbtn");

// go back button

backbtn.addEventListener("click", function () {
    window.location = "/pages/splash.html";
});




