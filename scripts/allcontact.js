document.addEventListener("DOMContentLoaded", () => {
    const contactsListElem = document.getElementById("contactsList");
    const contacts = JSON.parse(localStorage.getItem('contact')) || [];
    const searchInput = document.getElementById("searchInput");

    function displayContacts(filteredContacts) {
        // sort contacts by name
        filteredContacts.sort((a, b) => a.fullName.localeCompare(b.fullName));
        contactsListElem.innerHTML = ''; // Clear existing contacts

        filteredContacts.forEach((contact, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <p><b>Name:</b> ${contact.fullName}</p>
                <p><b>Phone:</b> ${contact.phone}</p>
                <p><b>Email:</b> ${contact.email}</p>
                <button class="viewBtn" data-index="${index}">View Contact</button>
                <button class="editBtn" data-index="${index}">Edit</button>
                <hr>
            `;
            contactsListElem.appendChild(li);
        });

        // Add event listeners for view buttons
        document.querySelectorAll('.viewBtn').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.getAttribute("data-index");
                window.location.href = `/pages/view.html?index=${index}`;
            });
        });

        // Add event listeners for edit buttons
        document.querySelectorAll('.editBtn').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.getAttribute("data-index");
                window.location.href = `/pages/edit.html?index=${index}`;
            });
        });
    }

    function handleSearch() {
        const query = searchInput.value.toLowerCase();
        const filteredContacts = contacts.filter(contact =>
            contact.fullName.toLowerCase().includes(query) ||
            contact.phone.includes(query) ||
            contact.email.toLowerCase().includes(query)
        );
        displayContacts(filteredContacts);
    }

    // Initial display of all contacts
    displayContacts(contacts);

    // Event listener for search input
    searchInput.addEventListener("input", handleSearch);
});




// // funtion to display all contacts inside the local storage in allcontact.html
// let searchbarElem = document.getElementById("searchbar");
// let backbtn = document.getElementById("backbtn");

// backbtn.addEventListener("click", function () {
//     window.location = "/pages/index.html";
// });

// searchbarElem.addEventListener("input", function () {
//     let value = searchbarElem.value;
//     let contactsListElem = document.getElementById("contactsList");
//     contactsListElem.innerHTML = "";

    
//     for (let i = 0; i < retrieve.length; i++) {
//         if (retrieve[i].fullName.toLowerCase().includes(value.toLowerCase())) {
//             const li = document.createElement("li");
//             li.innerHTML = ` <p> <b> Name:</b> ${retrieve[i].fullName}</p> 
//             <p> <b> Phone:</b> ${retrieve[i].phone}</p> 
//             <p> <b> Email:</b> ${retrieve[i].email}</p>
//              <button id="singlebtn">View Contact</button>
//             <button>Edit</button>
//             <hr>`;
//             contactsListElem.appendChild(li);
//         }
        
        

        
        
//     }

// });







// // funtion to display all contacts inside the local storage in allcontact.html


// const retrieve = JSON.parse(localStorage.getItem('contact'));
// function displayContact() {

//     if (retrieve != null) {
//         for (let i = 0; i < retrieve.length; i++) {
            
//             const contactsListElem = document.getElementById("contactsList");
           
//             const li = document.createElement("li");
//             li.innerHTML = ` <p> <b> Name:</b> ${retrieve[i].fullName}</p> 
//             <p> <b> Phone:</b> ${retrieve[i].phone}</p> 
//             <p> <b> Email:</b> ${retrieve[i].email}</p>
//              <button class="singlebtn">View Contact</button>
//             <button class="editBtn">Edit</button>
//             <hr>`;
         
            
//             contactsListElem.appendChild(li);
         
//         }
       
//     }
    
// }

// document.addEventListener("DOMContentLoaded", displayContact());



// // Function to be called when the single button is clicked
// function goeditbtn() {
//     // alert("Button was clicked!");
//     window.location = '/pages/edit.html';
// }

// // Select the button using its class name

// const editbtn = document.getElementsByClassName('editBtn');

// // Add an event listener to the buttons

// for (let i = 0; i < editbtn.length; i++) {
//     editbtn[i].addEventListener('click', goeditbtn);
// };
// // edit contact button function

// function editContact(index) {
//     // Get the index of the clicked contact
//     const contactIndex = index;

//     // Get the contact data from local storage
//     const contacts = JSON.parse(localStorage.getItem('contact'));

//     // Open the edit.html page with the contact data
//     window.location = `/pages/edit.html?index=${contactIndex}`;
// }
// editContact(index);

// // Select the button using its class name

// const singlebtn = document.getElementsByClassName('singlebtn');

document.addEventListener("DOMContentLoaded", () => {
    const contactsListElem = document.getElementById("contactsList");
    const contacts = JSON.parse(localStorage.getItem('contact')) || [];

    function displayContacts() {
        contactsListElem.innerHTML = ''; // Clear existing contacts

        contacts.forEach((contact, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <p><b>Name:</b> ${contact.fullName}</p>
                <p><b>Phone:</b> ${contact.phone}</p>
                <p><b>Email:</b> ${contact.email}</p>
                <button class="viewBtn" data-index="${index}">View Contact</button>
                <button class="editBtn" data-index="${index}">Edit</button>
                <hr>
            `;
            contactsListElem.appendChild(li);
        });

        // Add event listeners for edit buttons
        document.querySelectorAll('.editBtn').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.getAttribute("data-index");
                // Redirect to edit page with contact index
                window.location.href = `/pages/edit.html?index=${index}`;
            });
        });
        
    }

    displayContacts();
});

