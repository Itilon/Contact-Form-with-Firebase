const messagesRef = firebase.database().ref('messages');

document.getElementById('contact-form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    
    const name = getInputVal('name');
    const company = getInputVal('company');
    const email = getInputVal('email');
    const phone = getInputVal('phone');
    const message = getInputVal('message');

    saveMessage(name, company, email, phone, message);

    document.querySelector('.alert').style.display = 'block';

    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    document.getElementById('contact-form').reset();
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveMessage(name, company, email, phone, message) {
    const newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}