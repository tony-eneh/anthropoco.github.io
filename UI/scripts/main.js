function displayLogin(e) {
    document.querySelector('#sign-up').style.display = 'none';
    document.querySelector('#login').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
}

function displaySignUp(e) {
    document.querySelector('#login').style.display = 'none';
    document.querySelector('#sign-up').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
}

function closeModal(e) {
    document.querySelector('.overlay').style.display = 'none';
}

function login(e) {
    //submit login credentials
    //on success display entries.html
    window.location.assign("entries.html")
}

