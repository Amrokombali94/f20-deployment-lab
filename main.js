

const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const password = document.querySelector('#password')
const form = document.querySelector('form')
const buttom = document.querySelector('button')

// console.log(body.firstName)
function submitForm(evt) {
    let body = {
    firstName : firstName.value,
    lastName : lastName.value,
    password : password.value
    }
    console.log(body)
    evt.preventDefault();
    axios.post('http://localhost:4005/index2', body)
    // .then(res)
}


const getError = () => {
    axios.get('/api/functions')
    .then(res => console.log(res.data))
}




form.addEventListener('submit', submitForm)
buttom.addEventListener('click', getError)