

// funtion to display all contacts inside the local storage in allcontact.html
let searchbarElem = document.getElementById("searchbar");
let backbtn = document.getElementById("backbtn");

backbtn.addEventListener("click", function () {
    window.location = "/pages/index.html";
});

searchbarElem.addEventListener("input", function () {
    let value = searchbarElem.value;
    let contactsListElem = document.getElementById("contactsList");
    contactsListElem.innerHTML = "";

    
    for (let i = 0; i < retrieve.length; i++) {
        if (retrieve[i].fullName.toLowerCase().includes(value.toLowerCase())) {
            const li = document.createElement("li");
            li.innerHTML = ` <p> <b> Name:</b> ${retrieve[i].fullName}</p> 
            <p> <b> Phone:</b> ${retrieve[i].phone}</p> 
            <p> <b> Email:</b> ${retrieve[i].email}</p>
             <button id="singlebtn">View Contact</button>
            <button>Edit</button>
            <hr>`;
            contactsListElem.appendChild(li);
        }
        
        

        
        
    }
    

});

const retrieve = JSON.parse(localStorage.getItem('contact'));
function displayContact() {

    if (retrieve != null) {
        for (let i = 0; i < retrieve.length; i++) {
            
            const contactsListElem = document.getElementById("contactsList");
           
            const li = document.createElement("li");
            li.innerHTML = ` <p> <b> Name:</b> ${retrieve[i].fullName}</p> 
            <p> <b> Phone:</b> ${retrieve[i].phone}</p> 
            <p> <b> Email:</b> ${retrieve[i].email}</p>
             <button id="singlebtn">View Contact</button>
            <button>Edit</button>
            <hr>`;
         
            
            contactsListElem.appendChild(li);
         
        }
       
    }
    
}

document.addEventListener("DOMContentLoaded", displayContact());



// Function to be called when the single button is clicked
function gosinglebtn() {
    // alert("Button was clicked!");
    window.location = '/pages/singlepage.html';
}

// Select the button using its ID
const singlebtn = document.getElementById('singlebtn');

// Add an event listener to the button
singlebtn.addEventListener('click', gosinglebtn);









