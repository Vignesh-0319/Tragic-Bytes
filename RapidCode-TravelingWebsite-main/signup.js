document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");

    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("pword");
    const confirmPassword = document.getElementById("confirmPword");

    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const signupError = document.getElementById("signupError");

    // Show error message smoothly
    function showError(element, message) {
        element.textContent = message;
        element.style.opacity = "1";
    }

    function clearError(element) {
        element.textContent = "";
        element.style.opacity = "0";
    }

    // Basic validation checks
    function validateUsername() {
        if (username.value.trim().length < 3) {
            showError(usernameError, "Username must be at least 3 characters long.");
            return false;
        }
        clearError(usernameError);
        return true;
    }

    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            showError(emailError, "Please enter a valid email address.");
            return false;
        }
        clearError(emailError);
        return true;
    }

    function validatePassword() {
        if (password.value.length < 6) {
            showError(passwordError, "Password must be at least 6 characters.");
            return false;
        }
        clearError(passwordError);
        return true;
    }

    function validateConfirmPassword() {
        if (confirmPassword.value !== password.value) {
            showError(confirmPasswordError, "Passwords do not match.");
            return false;
        }
        clearError(confirmPasswordError);
        return true;
    }

    // Live input validation
    username.addEventListener("input", validateUsername);
    email.addEventListener("input", validateEmail);
    password.addEventListener("input", validatePassword);
    confirmPassword.addEventListener("input", validateConfirmPassword);

    // Form submission
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default submission

        let isValid = validateUsername() && validateEmail() && validatePassword() && validateConfirmPassword();

        if (!isValid) {
            showError(signupError, "Please fix the errors before submitting.");
            return;
        }

        clearError(signupError);
        alert("Sign-up successful!");
        signupForm.reset();
    });
});
