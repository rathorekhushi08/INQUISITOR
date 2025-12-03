window.performLogin = function(e) {
    e.preventDefault();
    localStorage.setItem("session", "1");
    location.hash = "dashboard";
}

window.logout = function() {
    localStorage.removeItem("session");
    location.hash = "login";
}

window.showSignup = function(){
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("signupForm").classList.remove("hidden");
}

window.showLogin = function(){
    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
}

window.handleSignup = function(e){
    e.preventDefault();
    alert("Access request submitted! Team will contact you within 24 hours.");
    showLogin();
}