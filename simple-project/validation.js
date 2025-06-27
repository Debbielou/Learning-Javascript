function validateForm() {
    // Basic required field validation
    for (var i = 0; i < myForm.elements.length; i++) {
        if (myForm.elements[i].className == "req" && myForm.elements[i].value.length == 0) {
            alert("Please fill out all fields.");
            return false;
        }
    }

    // Email validation
    let email = document.getElementById("email").value;
    let atPos = email.indexOf("@");
    let dotPos = email.lastIndexOf(".");
    if (atPos < 1 || dotPos <= atPos + 2 || dotPos + 2 >= email.length) {
        alert("Please enter a valid email address.");
        return false;
    }

    // ---
    // Validate first name
    const firstNameInput = document.getElementById("firstName");
    const firstName = firstNameInput.value.trim(); 

    if (firstName.length < 5) {
        alert("First Name must be at least 5 characters long.");
        firstNameInput.focus();
        return false;
    }
    // Check if the first character is a capital letter
    if (!/^[A-Z]/.test(firstName)) { 
        alert("The first letter of your First Name must be a capital letter.");
        firstNameInput.focus();
        return false;
    }

    
    const lastNameInput = document.getElementById("lastName");
    const lastName = lastNameInput.value.trim(); 

    if (lastName.length < 5) {
        alert("Last Name must be at least 5 characters long.");
        lastNameInput.focus();
        return false;
    }
    
    if (!/^[A-Z]/.test(lastName)) { 
        alert("The first letter of your Last Name must be a capital letter.");
        lastNameInput.focus();
        return false;
    }

    return true; 
}