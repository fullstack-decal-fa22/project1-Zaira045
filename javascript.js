let emailDisplayed = false;
function display() {
    let emailtxt = document.querySelector(".displayEmail");
    if (emailDisplayed) {
        emailDisplayed = false;
        emailtxt.textContent = ""; 
    } else {
        emailtxt.textContent = "zairafuentes@berkeley.edu";
        emailDisplayed = true;
    }
}