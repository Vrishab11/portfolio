const scriptURL = 'https://script.google.com/macros/s/AKfycbzMr7pccIWkfX0wZ53w3jQPwhCQqo14h6q3175bXnJJR1LjrR3dfNj2mhnp4R6jK6dF/exec'
const form = documnet.forms['enquiry']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for contacting us..! We will Contact You Soon.."))
    .catch(error => console.error('Error!', error.message))
})