const email = getEmail()
const emailText = changeEmailText()

function changeEmailText() {
    const span = document.querySelector('.html2 .main__success span')

    span.innerHTML = email.email

    return span.textContent
}

function getEmail() {
    const emailURL = new URLSearchParams(window.location.search)
    const email = {}

    for (const [key, value] of emailURL) {
        email[key] = value
    }

    return email
}

console.log(email)
console.log(emailText)