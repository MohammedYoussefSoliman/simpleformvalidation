let form = document.getElementById('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let passwordConfirm = document.getElementById('password2');

//Functions

const handleEmailValidation = email => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regex.test(email)) {
        showError(email, 'Invalid email address, please enter a correct email address')
    }else{
        showSuccess(email)
    }
}

const handleInputLength = (input, min, max) => {
    if(input.value.length < min) {
        showError(input, `${fieldCap(input)} must be at least ${min}`)
    } else if(input.value.length > max) {
        showError(input, `${fieldCap(input)} must be less than ${max}`)
    }else{
        showSuccess(input)
    }

}

const handleCheckedFeilds = inputs => {
    inputs.forEach(input => {
        if(input.value.trim() ==='') {
            showError(input, `${fieldCap(input)} is required`)
        }else{
            showSuccess(input)
        }
    })
}

const handleConfirmPassword = (input1, input2) => {
    if(input1.value !== input2.value) {
        showError(input1, `${fieldCap(input1)} does not match`)
        showError(input2, `${fieldCap(input1)} does not match`)
    }else{
        showSuccess(input1)
        showSuccess(input2)
    }
}

const fieldCap = input => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

const showError = (input, msg)=> {
    let formControl = input.parentElement;
    formControl.classList.add('error')
    formControl.querySelector('small').innerText = msg;
}

const showSuccess = input => {
    let formControl = input.parentElement;
    formControl.classList.add('success')
}


//Event Listeners

form.addEventListener('submit', e=> {
    e.preventDefault();
    console.log('submitted')
    handleCheckedFeilds([username, email, password, passwordConfirm])
    handleInputLength(username, 3, 15)
    handleInputLength(password, 6, 15)
    handleEmailValidation(email)
    handleConfirmPassword(password, passwordConfirm)
})