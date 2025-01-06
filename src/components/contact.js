
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
      
        const name = form.querySelector('input[placeholder="Enter Name"]');
        const email = form.querySelector('input[placeholder="example@gmail.com"]');
        const message = form.querySelector('input[placeholder="Message Here"]');

        if (!name.value.trim()) {
            alert("Name is required.");
            name.focus();
            e.preventDefault(); 
            return;
        }

        if (!email.value.trim() || !validateEmail(email.value)) {
            alert("Please enter a valid email address.");
            email.focus();
            e.preventDefault(); 
            return;
        }

        if (!message.value.trim()) {
            alert("Message cannot be empty.");
            message.focus();
            e.preventDefault(); 
            return;
        }

        alert("Form submitted successfully!");
    });
});


function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
