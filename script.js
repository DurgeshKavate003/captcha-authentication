const captchaTextBox = document.querySelector('.captcha-box input');
const refreshButton = document.querySelector('.refresh-button');
const captchaInputBox = document.querySelector('.captcha-input input');
const message = document.querySelector('.message');
const submitButton = document.querySelector('.button');

let captchaText = null;

const generateCaptcha = () => {
    const randomString = Math.random().toString(36).substring(2, 7);
    const randomeStringArray = randomString.split("");
    const changeString = randomeStringArray.map((char) => (Math.random() > 0.5 ? char.toUpperCase() : char));
    captchaText = changeString.join("   ");
    captchaTextBox.value = captchaText;
    console.log(captchaText);
}

const refreshBtnClick = () => {
    generateCaptcha();
    captchaInputBox.value = "";
    captchaKeyUpValidate();
}

const captchaKeyUpValidate = () => {
    submitButton.classList.toggle("disabled", !captchaInputBox.value);

    if (captchaInputBox.value === "") {
        message.classList.remove('active');
    }
}

const submitBtnClick = () => {
    captchaText = captchaText
        .split("")
        .filter((char) => char != " ")
        .join("");

    message.classList.add('active');
    if (captchaInputBox.value === captchaText) {
        message.innerText = "CAPTCHA is CORRECT";
        message.style.color = 'green';
    } else if (captchaInputBox.value === "") {
        message.innerText = "Enter CAPTCHA";
        message.style.color = 'blue';
    } else {
        message.innerText = "CAPTCHA is WRONG";
        message.style.color = '#FF2525';
    }
}

refreshButton.addEventListener("click", refreshBtnClick);
captchaInputBox.addEventListener("keyup", captchaKeyUpValidate);
submitButton.addEventListener("click", submitBtnClick);

generateCaptcha();