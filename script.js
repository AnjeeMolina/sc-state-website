document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const emailAddress = document.getElementById('emailAddress').value;
    const confirmEmail = document.getElementById('confirmEmail').value;
    const question = document.getElementById('question').value;

    if (emailAddress !== confirmEmail) {
        alert("Email addresses do not match!");
        return;
    }

    // You can add further processing here, like sending the form data via AJAX or displaying a success message
    alert("Form submitted successfully!\n" +
          "First Name: " + firstName + "\n" +
          "Last Name: " + lastName + "\n" +
          "Email Address: " + emailAddress + "\n" +
          "Question: " + question);
});