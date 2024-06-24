// alert("Hi");
// Add an event listener to the form submit button
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values from the form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display an alert with the user's name and email
    alert(`Hey ${name}! I got your message "${message}" from ${email}.`);

     // Clear the form fields
     document.getElementById('name').value = '';
     document.getElementById('email').value = '';
     document.getElementById('message').value = '';
});
