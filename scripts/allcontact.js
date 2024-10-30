

// funtion to display all contacts inside the local storage in allcontact.html

const retrieve = JSON.parse(localStorage.getItem('contact'));
function displayContact() {

    if (retrieve != null) {
        for (let i = 0; i < retrieve.length; i++) {
            
            const contactsListElem = document.getElementById("contactsList");
           
            const li = document.createElement("li");
            li.innerHTML = ` <p> <b> Name:</b> ${retrieve[i].fullName}</p> 
            <p> <b> Phone:</b> ${retrieve[i].phone}</p> 
            <p> <b> Email:</b> ${retrieve[i].email}</p>
            
             <button class="viewbtn" data-index="${i}">View Contact</button>
               
            <button>Edit</button>
            <hr>`;
         
            
            contactsListElem.appendChild(li);
         
        }
       
    }
    
}

document.addEventListener("DOMContentLoaded", displayContact());






// Function to handle viewing a contact
function viewContact(event) {
    const index = event.target.getAttribute('data-index');
    localStorage.setItem('selectedContactIndex', index); // Save the selected contact index
    window.location = '/pages/singlepage.html'; // Navigate to the single contact page
}

// Add event listeners to each "View Contact" button after DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
    const viewButtons = document.querySelectorAll('.viewbtn');
    viewButtons.forEach(button => {
        button.addEventListener('click', viewContact);
    });
});










