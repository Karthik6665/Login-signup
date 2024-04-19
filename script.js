const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    try {
        const response = await fetch(`https://login-js-77131-default-rtdb.asia-southeast1.firebasedatabase.app/details.json`);
        if (!response.ok) {
            throw new Error("Failed to fetch");
        }
        const userData = await response.json();
        const user = Object.values(userData).find(user => user.emailid === email && user.password === password);

        if (user) {
            alert("Login Successful");
        } else {
            alert("Invalid Email or Password");
        }
        emailInput.value='';
        passwordInput.value=''
    } catch (error) {
        console.error('Error:', error);
        alert("An error occurred. Please try again later.");
    }
};

const loginBtn = document.querySelector("#lbtn");
loginBtn.addEventListener("click", handleLogin);
