let oneDigit = /(?=.*[0-9])/;
let lowerCase = /(?=.*[a-z])/;
let upperCase = /(?=.*[A-Z])/;  
let specialCharacter = /(?=.*[!@#$%^&*_=+\-\(\)])/;  
let eightCharacters = /.{8,16}/;    

function getValue() {

    let pEightChars = document.getElementById('pEightChars');
    let pOneNumber = document.getElementById('pOneNumber');
    let pUpperCase = document.getElementById('pUpperCase');
    let pLowerCase = document.getElementById('pLowerCase');
    let pSpecialChar = document.getElementById('pSpecialChar');

    let password = document.getElementById('password');
    let passwordCornfirm = document.getElementById('passwordConfirm');
    let pwInfoText = document.getElementById('pwInfoText');

    // Checks whether password has one digit
    if(oneDigit.test(password.value) == true){
        pOneNumber.style.background = "url(images/check_circle_FILL0_wght400_GRAD0_opsz48.svg) no-repeat";
        pOneNumber.style.paddingLeft = "1.5em";
        pOneNumber.style.color = "var(--valid-green-color)";
        pOneNumber.style.display = "default";
    }else if (oneDigit.test(password.value) == false) {
        pOneNumber.style.background = "url(images/warning_FILL0_wght400_GRAD0_opsz48.svg) no-repeat";
        pOneNumber.style.paddingLeft = "1.5em";
        pOneNumber.style.color = "var(--invalid-red-color)";
        pOneNumber.style.display = "default";
    }


    // Checks whether password has lower case letter
    if(lowerCase.test(password.value) == true){
        pLowerCase.style.background = "url(images/check_circle_FILL0_wght400_GRAD0_opsz48.svg) no-repeat";
        pLowerCase.style.paddingLeft = "1.5em";
        pLowerCase.style.color = "var(--valid-green-color)";
        pLowerCase.style.display = "default";
    }else if (lowerCase.test(password.value) == false) {
        pLowerCase.style.background = "url(images/warning_FILL0_wght400_GRAD0_opsz48.svg) no-repeat";
        pLowerCase.style.paddingLeft = "1.5em";
        pLowerCase.style.color = "var(--invalid-red-color)";
        pLowerCase.style.display = "default";
    }


    // Checks whether password has upper case letter
    if(upperCase.test(password.value) == true){
        pUpperCase.style.background = "url(images/check_circle_FILL0_wght400_GRAD0_opsz48.svg) no-repeat";
        pUpperCase.style.paddingLeft = "1.5em";
        pUpperCase.style.color = "var(--valid-green-color)";
        pUpperCase.style.display = "default";
    }else if (upperCase.test(password.value) == false) {
        pUpperCase.style.background = "url(images/warning_FILL0_wght400_GRAD0_opsz48.svg) no-repeat";
        pUpperCase.style.paddingLeft = "1.5em";
        pUpperCase.style.color = "var(--invalid-red-color)";
        pUpperCase.style.display = "default";
    }


    // Checks whether password has upper a special character
    if(specialCharacter.test(password.value) == true){
        pSpecialChar.style.background = "url(images/check_circle_FILL0_wght400_GRAD0_opsz48.svg) no-repeat";
        pSpecialChar.style.paddingLeft = "1.5em";
        pSpecialChar.style.color = "var(--valid-green-color)";
        pSpecialChar.style.display = "default";
    }else if (specialCharacter.test(password.value) == false) {
        pSpecialChar.style.background = "url(images/warning_FILL0_wght400_GRAD0_opsz48.svg) no-repeat";
        pSpecialChar.style.paddingLeft = "1.5em";
        pSpecialChar.style.color = "var(--invalid-red-color)";
        pSpecialChar.style.display = "default";
    }


    // Checks whether password has 8-16 characters
    if(eightCharacters.test(password.value) == true){
        pEightChars.style.background = "url(images/check_circle_FILL0_wght400_GRAD0_opsz48.svg) no-repeat";
        pEightChars.style.paddingLeft = "1.5em";
        pEightChars.style.color = "var(--valid-green-color)";
        pEightChars.style.display = "default";
    }else if (eightCharacters.test(password.value) == false) {
        pEightChars.style.background = "url(images/warning_FILL0_wght400_GRAD0_opsz48.svg) no-repeat";
        pEightChars.style.paddingLeft = "1.5em";
        pEightChars.style.color = "var(--invalid-red-color)";
        pEightChars.style.display = "default";
    }

    // Checks whether password fields have the same input values and sets styling
    if(password.value == passwordCornfirm.value){
        passwordCornfirm.style.paddingLeft = "1.5em";
        passwordCornfirm.style.border = "solid 2px var(--valid-green-color)";
        passwordCornfirm.style.borderLeft = "solid 5px var(--valid-green-color)";

        pwInfoText.style.background = "url(images/check_circle_FILL0_wght400_GRAD0_opsz48.svg) no-repeat";
        pwInfoText.style.paddingLeft = "1.5em";
        pwInfoText.style.color = "var(--valid-green-color)";

    // Checks whether password fields have NOT the same input values and sets styling
    } else if (password.value != passwordCornfirm.value){
        passwordCornfirm.style.paddingLeft = "1.5em";
        passwordCornfirm.style.border = "solid 2px var(--invalid-red-color)";
        passwordCornfirm.style.borderLeft = "solid 5px var(--invalid-red-color)";

        pwInfoText.style.background = "url(images/warning_FILL0_wght400_GRAD0_opsz48.svg) no-repeat";
        pwInfoText.style.paddingLeft = "1.5em";
        pwInfoText.style.color = "var(--invalid-red-color)";
    }
};