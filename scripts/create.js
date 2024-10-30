const  contactElem = document.getElementById("contactForm")






// create local storage
const contacts = JSON.parse(localStorage.getItem("contact")) || [];

function createContact(e) {

    e.preventDefault();

    const fullName = contactElem.names.value.trim();
    const phone = contactElem.email.value.trim();
    const email = contactElem.number.value;


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
        alert("please enter valid details");
    }
    // displayContacts();
}

contactElem.addEventListener("submit", createContact);



// Function to be called when the view button is clicked
function goviewall() {
    // alert("Button was clicked!");
    window.location = '/pages/allcontact.html';
}

// Select the button using its ID
const viewallbtn = document.getElementById('viewall');

// Add an event listener to the button
viewallbtn.addEventListener('click', goviewall);


// Function to be called when the back button is clicked


// Back button functionality
document.getElementById('backBtn').addEventListener('click', () => {
    window.location = '/index.html'; // Change this to your main page
    });
// function goback() {
//     // alert("Button was clicked!");
//     window.location = '/pages/index.html';
// }

// // Select the button using its ID
// const backBtnElem = document.getElementById('backBtn');

// // Add an event listener to the button
// backBtnElem.addEventListener('click', goback);







// // Function to display all contacts


// Call the function to display contacts when the page loads
window.onload = displayContacts;














// function displayContacts() {
//     const contactList = document.getElementById("contactlist");
//     contactList.innerHTML = "";
//     for (let i = 0; i < contacts.length; i++) {
//         const contact = contacts[i];
//         const li = document.createElement("li");
//         li.innerHTML = `
//             <p>Name: ${contact.fullName}</p>
//             <p>Phone: ${contact.phone}</p>  
//             <p>Email: ${contact.email}</p>
//         `;
//         contactList.appendChild(li);
//     }
// }
// // displayContacts();
// window.onload = displayContacts;



















// function displayContacts() {
//     const contactsList = document.getElementById("contactlist");
//     contactsList.innerHTML = "";
//     for (let i = 0; i < contacts.length; i++) {
//         const contact = contacts[i];
//         const li = document.createElement("li");
//         li.innerHTML = `
//             <p>Name: ${contact.fullName}</p>
//             <p>Phone: ${contact.phone}</p>  
//             <p>Email: ${contact.email}</p>
//         `;
//         contactsList.appendChild(li);
//     }
// }
// displayContacts();


