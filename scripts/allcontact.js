


// funtion to display all contacts inside the local storage in allcontact.html
let searchbarElem = document.getElementById("searchbar");
let backbtn = document.getElementById("backbtn");

//go back button

backbtn.addEventListener("click", function () {
    window.location = "/pages/index.html";
});











// function editContact(i

document.addEventListener("DOMContentLoaded", () => {
    const contactsListElem = document.getElementById("contactsList");
    const contacts = JSON.parse(localStorage.getItem('contact')) || [];

    function displayContacts() {

        //sort contacts by name
        contacts.sort((a, b) => a.fullName.localeCompare(b.fullName));
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

        // Add event listeners for view buttons
        document.querySelectorAll('.viewBtn').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.getAttribute("data-index");
                // Redirect to view page with contact index
                window.location.href = `/pages/view.html?index=${index}`;
            });
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

    displayContacts(); // Call the function to display contacts
});


