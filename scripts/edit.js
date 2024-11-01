document.addEventListener("DOMContentLoaded", () => {
    // Get the contact ID from the URL instead of the index
    const contactId = new URLSearchParams(window.location.search).get('id');
    const contacts = JSON.parse(localStorage.getItem('contact')) || [];

    // Find the contact by its unique ID
    const contact = contacts.find(contact => contact.id == contactId);

    // Validate the contact and load data into form fields
    if (!contact) {
        alert("Contact not found.");
        window.location.href = "/pages/allcontact.html";
        return;
    }

    // Load the contact data into the form fields
    document.getElementById("name").value = contact.fullName;
    document.getElementById("phone").value = contact.phone;
    document.getElementById("email").value = contact.email;

    // Update contact in local storage on form submission
    document.getElementById("contactForm").addEventListener("submit", (e) => {
        e.preventDefault();

        // Update the contact information
        contact.fullName = document.getElementById("name").value;
        contact.phone = document.getElementById("phone").value;
        contact.email = document.getElementById("email").value;

        // Save the updated contacts array to localStorage
        localStorage.setItem('contact', JSON.stringify(contacts));
        alert("Contact updated successfully!");
        window.location.href = "/pages/allcontact.html";
    });

    // Delete contact from local storage
    document.getElementById("deleteBtn").addEventListener("click", () => {
        if (confirm("Are you sure you want to delete this contact?")) {
            // Find the index of the contact to remove
            const contactIndex = contacts.findIndex(contact => contact.id == contactId);
            if (contactIndex > -1) {
                contacts.splice(contactIndex, 1);
                localStorage.setItem('contact', JSON.stringify(contacts));
                alert("Contact deleted successfully!");
                window.location.href = "/pages/allcontact.html";
            }
        }
    });
});
