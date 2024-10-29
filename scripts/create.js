const  contactElem = document.getElementById("contactForm")






// create local storage
const contacts = JSON.parse(localStorage.getItem("contact")) || [];

function createContact(e) {

    e.preventDefault();

    const fullName = contactElem.names.value.trim();
    const phone = contactElem.email.value.trim();
    const email = contactElem.number.value;


    if (fullName && phone && email) {
        // create a new contact object
        const newContact = {
            fullName: fullName,
            phone: phone,
            email: email,
        };



        //push object inside the local storage
        contacts.push(newContact);

        //store object inside local storage
        localStorage.setItem("contact", JSON.stringify(contacts));

        // clear field

        contactElem.names.value = "";
        contactElem.email.value = "";
        contactElem.number.value = "";

    } else {
        alert("please enter valid details")
    }

}

contactElem.addEventListener("submit", createContact)


