
document.addEventListener("DOMContentLoaded", function () {
    const selectedContactIndex = localStorage.getItem('selectedContactIndex');
    const contacts = JSON.parse(localStorage.getItem('contact'));

    if (selectedContactIndex !== null && contacts) {
        const contact = contacts[selectedContactIndex];

        // Display contact details on the page and buttons
        const contactDetailsElem = document.getElementById("contactDetails");
        contactDetailsElem.innerHTML = `
            <h2>Contact Details</h2>
            <p><b>Name:</b> ${contact.fullName}</p>
            <p><b>Phone:</b> ${contact.phone}</p>
            <p><b>Email:</b> ${contact.email}</p>
            <button class="btn" id="editContact">Edit</button>
            <button class="btn" id="deleteContact">Delete</button>
        `;
    }
});

// document.addEventListener("DOMContentLoaded", function () {
//     const selectedContactIndex = localStorage.getItem('selectedContactIndex');
//     const contacts = JSON.parse(localStorage.getItem('contact'));

//     if (selectedContactIndex !== null && contacts) {
//         const contact = contacts[selectedContactIndex];

//         // Display contact details and add buttons to the page with 'btn' class
//         const contactDetailsElem = document.getElementById("contactDetails");
//         contactDetailsElem.innerHTML = `
//             <h2>Contact Details</h2>
//             <p><b>Name:</b> ${contact.fullName}</p>
//             <p><b>Phone:</b> ${contact.phone}</p>
//             <p><b>Email:</b> ${contact.email}</p>
//             <button class="btn" id="editContact">Edit</button>
//             <button class="btn" id="deleteContact">Delete</button>
//         `;
//     }
// });

// // script.js
// document.addEventListener("DOMContentLoaded", function() {
//     const buttonContainer = document.getElementById("buttonContainer");

//     // Create the Edit button
//     const editButton = document.createElement("button");
//     editButton.className = "btn";
//     editButton.id = "editButton";
//     editButton.textContent = "Edit";

//     // Create the Delete button
//     const deleteButton = document.createElement("button");
//     deleteButton.className = "btn";
//     deleteButton.id = "deleteButton";
//     deleteButton.textContent = "Delete";

//     // Append buttons to the container
//     buttonContainer.appendChild(editButton);
//     buttonContainer.appendChild(deleteButton);
// });
