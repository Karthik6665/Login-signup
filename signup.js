let nameinput = document.querySelector("#name");
let mobileinput = document.querySelector('#mobile');
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let confirmpasswordinput = document.querySelector('#Confirmpassword');

const fullname = (e) => {
    if(e.target.value.length<3){
        alert("please Enter more than three characters")
    }else{
        e.target.value
    }
};

const emailid = (e) => {
    e.target.value
};

const password = (e) => {
    if (e.target.value.length < 6) {
        alert("Please enter a password of minimum 6 digits");
        e.target.value = '';
        return;
    } else {
        e.target.value
    }
};

const mobilenumber = (e) => {
    if(e.target.value.length<10){
        alert("please enter your 10 digit mobile number")
    }
    else{
        e.target.value;
    }
};

const confirmpassword = (e) => {
    const confirmPasswordValue = e.target.value;
    const passwordValue = passwordInput.value;
    if (confirmPasswordValue === '') {
        alert("Please enter confirm password");
    } else if (confirmPasswordValue !== passwordValue) {
        alert("Passwords don't match");
        e.target.value = '';
        return;
    } else {
       e.target.value;
    }
};

nameinput.addEventListener("change", fullname);
emailInput.addEventListener("change", emailid);
mobileinput.addEventListener("change", mobilenumber);
passwordInput.addEventListener("change", password);
confirmpasswordinput.addEventListener("change", confirmpassword);

const submithnadler = async (e) => {
    e.preventDefault();
    const Name = nameinput.value;
    const emailid = emailInput.value;
    const mobile = mobileinput.value;
    const password = passwordInput.value;
    const confirmpassword = confirmpasswordinput.value;
    if (!Name || !emailid || !mobile || !password || !confirmpassword) {
        alert("Please fill in all the details before submitting.");
        return;
    }

    try {
        const response = await fetch('https://login-js-77131-default-rtdb.asia-southeast1.firebasedatabase.app/details.json', {
            method: 'post',
            body: JSON.stringify({ Name, emailid, mobile, password, confirmpassword })
        });
        console.log(response);

        nameinput.value = '';
        emailInput.value = '';
        mobileinput.value = '';
        passwordInput.value = '';
        confirmpasswordinput.value = '';
        setTimeout(() => {
            window.location.href = "file:///C:/Users/getik/OneDrive/Desktop/media/signup%26login/login.html?";
        }, 200);
        

    }
    catch (error) {
        console.log('error: ', error);
        alert("An Error occurred please try again");
    }
};

let btn = document.querySelector("#registerbtn");
btn.addEventListener("click", submithnadler);
