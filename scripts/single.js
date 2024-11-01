
document.addEventListener("DOMContentLoaded", function () {
    const singlePhoneContact = JSON.parse(localStorage.getItem('singleContact'));
    console.log("singlePhoneContact", singlePhoneContact);

    const selectedContactIndex = new URLSearchParams(window.location.search).get('index');

    // function to Display contact details in  singlepage.html
    const contactDetailsElem = document.getElementById("contactDetails");
    contactDetailsElem.innerHTML = `
        <h2>Contact Details</h2>
        <p><b>Name:</b> ${singlePhoneContact.fullName}</p>
        <p><b>Phone:</b> ${singlePhoneContact.phone}</p>
        <p><b>Email:</b> ${singlePhoneContact.email}</p>
        <button class="btn" id="editContact">Edit</button>
      <button class="btn" id="deleteContact">Delete</button>
    `;


    document.getElementById("editContact").addEventListener("click", function () {
        window.location.href = `/pages/edit.html?index=${selectedContactIndex}`;
    });

    


    document.getElementById("deleteContact").addEventListener("click", function () {
        if (confirm("Are you sure you want to delete this contact?")) {
            contacts.splice(selectedContactIndex, 1);
            localStorage.setItem('contact', JSON.stringify(contacts));
            window.location.href = "/pages/allcontact.html";
        }
    });
});





// handle singlepage back button 
let backbtn = document.getElementById("backbtn");

// go back button

backbtn.addEventListener("click", function () {
    window.location = "/pages/allcontact.html";
});




