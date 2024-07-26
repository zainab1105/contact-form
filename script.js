function validateForm() {
    let name = document.forms["contact-form"]["name"].value;
    let email = document.forms["contact-form"]["email"].value;
    let subject = document.forms["contact-form"]["subject"].value;
    let message = document.forms["contact-form"]["message"].value;

    if (name == "" || email == "" || subject == "" || message == "") {
        alert("All fields must be filled out");
        return false;
    }
    return true;
}
