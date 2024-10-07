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
