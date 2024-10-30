let contacts = [];

// Load contacts from local storage on page load
function loadContacts() {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts) {
        contacts = storedContacts;
    }
    displayContacts();
}

// Display contacts
function displayContacts() {
    const list = document.getElementById('contact-list');
    list.innerHTML = '';
    contacts.forEach(contact => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${contact.name} - ${contact.phone} - ${contact.email}
            <button onclick="editContact(${contact.id})">Edit</button>
            <button onclick="deleteContact(${contact.id})">Delete</button>
        `;
        list.appendChild(li);
    });
}

// Handle the contact form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // Check if we're updating an existing contact
    const editingId = this.dataset.editingId;
    if (editingId) {
        updateContact(editingId, name, phone, email);
        delete this.dataset.editingId; // Clear the editing state
    } else {
        addContact(name, phone, email);
    }

    clearForm();
});

// Function to add a new contact
function addContact(name, phone, email) {
    const contact = { id: Date.now(), name, phone, email };
    contacts.push(contact);
    saveToLocalStorage();
    displayContacts();
}

// Function to edit a contact
function editContact(id) {
    const contact = contacts.find(c => c.id === id);
    document.getElementById('name').value = contact.name;
    document.getElementById('phone').value = contact.phone;
    document.getElementById('email').value = contact.email;

    // Set the form to editing mode
    document.getElementById('contact-form').dataset.editingId = id;
}

// Function to update a contact
function updateContact(id, name, phone, email) {
    const contact = contacts.find(c => c.id == id);
    contact.name = name;
    contact.phone = phone;
    contact.email = email;
    saveToLocalStorage();
    displayContacts();
}

// Function to delete a contact
function deleteContact(id) {
    contacts = contacts.filter(contact => contact.id !== id);
    saveToLocalStorage();
    displayContacts();
}

// Save contacts to local storage
function saveToLocalStorage() {
    localStorage.setItem('contacts', JSON.stringify(contacts));
}

// Clear input fields
function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('contact-form').dataset.editingId = ''; // Clear editing ID
}

// Call loadContacts on page load
loadContacts();
