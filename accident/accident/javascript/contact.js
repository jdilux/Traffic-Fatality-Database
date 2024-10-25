document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        // Get form input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Regular expression for email validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // Validate name
        if (name === "") {
            alert("Please enter your name.");
            event.preventDefault();
            return;
        }

        // Validate email
        if (email === "" || !emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return;
        }

        // Validate subject
        if (subject === "") {
            alert("Please enter a subject.");
            event.preventDefault();
            return;
        }

        // Validate message
        if (message === "") {
            alert("Please enter your message.");
            event.preventDefault();
            return;
        }

        // If all fields are valid, submit form
        alert("Form submitted successfully!");
    });
});
