const form = document.querySelector('.main__form form')

form.addEventListener('submit', (event) => {
    const emailInput = document.querySelector(
        '.main__form form input[type="email"]'
    )
    const email = emailInput.value

    if (!checkEmail(email)) {
        event.preventDefault()
        errorEmail(emailInput)
    }
})

function checkEmail(email) {
    const regex =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

    return regex.test(email)
}

function errorEmail(emailInput) {
    emailInput.classList.add('error')
    errorEmailText()
}

function errorEmailText() {
    const errorEmail = document.querySelector('#emailError')

    errorEmail.innerHTML = 'Valid email required! '
}

