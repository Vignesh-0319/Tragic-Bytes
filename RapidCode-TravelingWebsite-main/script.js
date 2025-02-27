document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("pword");
    const errorContainer = document.createElement("div");

    errorContainer.id = "error-message";
    form.appendChild(errorContainer);

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        let errorMessage = "";

        // Basic validation
        if (username === "" || password === "") {
            errorMessage = "⚠️ Please enter both username and password.";
        } else {
            let storedUsers = JSON.parse(localStorage.getItem("users")) || [];
            let userFound = storedUsers.find(user => user.username === username && user.password === password);

            if (userFound) {
                // Successful login
                errorContainer.textContent = "";
                alert(`✅ Login successful! Welcome back, ${userFound.username}`);
                window.location.href = "index.html"; // Redirect to home page
                return;
            } else {
                errorMessage = "❌ Invalid username or password.";
            }
        }

        // Display error message
        if (errorMessage) {
            errorContainer.textContent = errorMessage;
            errorContainer.style.color = "#ff4d4d";
            errorContainer.style.marginTop = "10px";
            errorContainer.style.fontSize = "14px";
            errorContainer.style.textAlign = "center";

            // Shake animation on failure
            form.classList.add("shake");
            setTimeout(() => form.classList.remove("shake"), 500);
        }
    });
});
