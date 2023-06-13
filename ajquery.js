let validationSuccess;
function babu(event) {
    event.preventDefault();
    const Name = $("#name").val();
    const Email = $("#email").val();
    const Password = $(".password").val();
    validationSuccess = true;
    if (Name === "") {
        validationSuccess = false;
        $("#nameerr").text("Enter the name");
    } else {
        $("#nameerr").text("");
    }
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
    if (Email === "") {
        validationSuccess = false;
        $("#emailerr").text("Enter the email");
    } else if (!Email.match(regex)) {
        validationSuccess = false;
        $("#emailerr").text("Enter the valid email")
    } else {

        $("#emailerr").text("");
    }
    if (Password === "") {
        validationSuccess = false;
        $("#passerr").text("Enter the password");
    } else {
        $("#passerr").text("");
    }
}
// !Email.match(regex)