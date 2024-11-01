
document.addEventListener("DOMContentLoaded", () => {
    const contactsListElem = document.getElementById("contactsList");
    const contacts = JSON.parse(localStorage.getItem('contact')) || [];
    const searchInput = document.getElementById("searchInput");

    function displayContacts(filteredContacts) {
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
                window.location.href = `/pages/singlepage.html?index=${index}`;
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
//handle search
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
    // displayContacts(contacts);

    // Event listener for search input
    searchInput.addEventListener("input", handleSearch);
});



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

                // find contact by index
                const singleContact = contacts[index];
                // store contact in local storage
                localStorage.setItem('singleContact', JSON.stringify(singleContact));
                // Redirect to view page with contact index
                window.location.href = `/pages/singlepage.html?index=${index}`;
            });
        });

        // Add event listeners for edit buttons
        document.querySelectorAll('.editBtn').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.getAttribute("data-index");
                // //edit contact
                const contact = contacts[index];
                // // store contact in local storage
                localStorage.setItem('Contact', JSON.stringify(contact));

                // Redirect to edit page with contact index
                window.location.href = `/pages/edit.html?index=${index}`;
            });
        });
              const query = searchInput.value.toLowerCase();
   
    }

    displayContacts(); // Call the function to display contacts
});




//  handle all contact back button
let backbtn = document.getElementById("backbtn");

// go back button

backbtn.addEventListener("click", function () {
    window.location = "/pages/index.html";
});




   

