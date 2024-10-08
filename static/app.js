// Show spinner on page load
window.addEventListener('load', function() {
    var spinner = document.getElementById('spinner');
    spinner.classList.remove('show');
});

// Function to show the spinner manually if needed
function showSpinner() {
    var spinner = document.getElementById('spinner');
    spinner.classList.add('show');
}

// Function to hide the spinner manually if needed
function hideSpinner() {
    var spinner = document.getElementById('spinner');
    spinner.classList.remove('show');
}

function showLogin(role) {
    document.getElementById('farmer-login').style.display = 'none';
    document.getElementById('company-login').style.display = 'none';
    document.getElementById('agrishop-login').style.display = 'none';

    if (role === 'farmer') {
        document.getElementById('farmer-login').style.display = 'block';
    } else if (role === 'company') {
        document.getElementById('company-login').style.display = 'block';
    } else if (role === 'agrishop') {
        document.getElementById('agrishop-login').style.display = 'block';
    }
}

function loginUser(role) {
    document.getElementById('signin-section').style.display = 'none';
    
    if (role === 'farmer') {
        document.getElementById('farmer-dashboard').style.display = 'block';
    } else if (role === 'company') {
        document.getElementById('company-dashboard').style.display = 'block';
    } else if (role === 'agrishop') {
        document.getElementById('agrishop-dashboard').style.display = 'block';
    }
}
