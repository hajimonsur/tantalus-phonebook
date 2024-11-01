const  contactElem = document.getElementById("contactForm")






// create local storage
const contacts = JSON.parse(localStorage.getItem("contact")) || [];





function createContact(e) {

    e.preventDefault();

    const fullName = contactElem.names.value.trim();
    const email = contactElem.email.value.trim();
    const phone = contactElem.number.value;


    if (fullName && phone && email) {
        // create a new contact object
        const newContact = {
            fullName: fullName,
            phone: phone,
            email: email,
        };



        //push object inside the local storage
        contacts.push(newContact);

        //store object inside local storage
        localStorage.setItem("contact", JSON.stringify(contacts));

        // clear field

        contactElem.names.value = "";
        contactElem.email.value = "";
        contactElem.number.value = "";

    } else {
        alert("please enter valid details")
    }

}

contactElem.addEventListener("submit", createContact)



// Function to be called when the view button is clicked
function goviewall() {
    // alert("Button was clicked!");
    window.location = '/pages/allcontact.html';
}

// Select the button using its ID
const viewallbtn = document.getElementById('viewall');

// Add an event listener to the button
viewallbtn.addEventListener('click', goviewall);


// handle create back btn 

let backbtn = document.getElementById("backbtn");

// go back button

backbtn.addEventListener("click", function () {
    window.location = "/pages/index.html";
});








