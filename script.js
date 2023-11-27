
//validate the two passwords match
const pw1=document.getElementById('password1');
const pw2=document.getElementById('password2');
const msg=document.getElementById('errormsg')

function validatePasswordsMatch() {
    if(pw1.value!=pw2.value) {
        // add a class to pw1
        pw1.classList.add('pwerror');
        pw2.classList.add('pwerror');
        msg.textContent="* Passwords do not match";
    } else {
        pw1.classList.remove('pwerror')
        pw2.classList.remove('pwerror')
        msg.textContent="";
    }
}

console.log(pw1, pw2);
pw1.addEventListener('input', f=>validatePasswordsMatch())
pw2.addEventListener('input', f=>validatePasswordsMatch())

