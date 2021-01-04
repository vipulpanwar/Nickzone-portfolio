const SubmitForm = (e) => {
    // e.preventDefault();

    console.log('data');
    var name, email, message, contact;
    name = document.getElementById('name').value;
    email = document.getElementById('email').value;
    contact = document.getElementById('contact').value;
    message = document.getElementById('message').value;

    alert('Mail has been sent. Thank you for contacting Vipul Panwar');
    return false;
}