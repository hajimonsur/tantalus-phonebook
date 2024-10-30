document.addEventListener("DOMContentLoaded", () => {
    const contactIndex = new URLSearchParams(window.location.search).get('index');
    const contacts = JSON.parse(localStorage.getItem('contact')) || [];
    
    if (contactIndex === null || !contacts[contactIndex]) {
        alert("Contact not found.");
        window.location.href = "/pages/allcontact.html";
        return;
    }

    // Load the contact data into the form fields
    const contact = contacts[contactIndex];
    document.getElementById("name").value = contact.fullName;
    document.getElementById("phone").value = contact.phone;
    document.getElementById("email").value = contact.email;

    // Update contact in local storage
    document.getElementById("contactForm").addEventListener("submit", (e) => {
        e.preventDefault();
        
        contacts[contactIndex] = {
            fullName: document.getElementById("name").value,
            phone: document.getElementById("phone").value,
            email: document.getElementById("email").value,
        };
        
        localStorage.setItem('contact', JSON.stringify(contacts));
        alert("Contact updated successfully!");
        window.location.href = "/pages/allcontact.html";
    });

    // Delete contact from local storage
    document.getElementById("deleteBtn").addEventListener("click", () => {
        if (confirm("Are you sure you want to delete this contact?")) {
            contacts.splice(contactIndex, 1);
            localStorage.setItem('contact', JSON.stringify(contacts));
            alert("Contact deleted successfully!");
            window.location.href = "/pages/allcontact.html";
        }
    });
});
