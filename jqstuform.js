let validationSuccess;

function click(event) {
  event.preventDefault();
  const fname = $("#fname").val();
  const lname = $("#lname").val();
  const email = $("#email").val();
  const password = $("#password").val();
  const cpassword = $("#cpassword").val();
  const dob = $("#dob").val();
  const mobile = $("#mobile").val();
  const department = $("#department").val();
  const country = $("#country").val();
  const gender = $("#gender").val();
  validationSuccess = true;

  if (fname === "") {
    validationSuccess = false;
    $("#fnameerr").text("Enter the fname");
  } else {
    $("#fnameerr").text("");
  }
  
  // Adding console log
  console.log("lname:", lname);

  if (lname === "") {
    validationSuccess = false;
    $("#lnameerr").text("Enter the lname");
  } else {
    $("#lnameerr").text("");
  }
  
  // Adding console log
  console.log("email:", email);

  if (email === "") {
    validationSuccess = false;
    $("#emailerr").text("Enter the Email");
  } else {
    $("#emailerr").text("");
  }
  
  // Adding console log
  console.log("password:", password);

  if (password === "") {
    validationSuccess = false;
    $("#passworderr").text("Enter the password");
  } else {
    $("#passworderr").text("");
  }
  
  // Adding console log
  console.log("cpassword:", cpassword);

  if (cpassword === "") {
    validationSuccess = false;
    $("#cpassworderr").text("Enter the cpassword");
  } else if (password !== cpassword) {
    validationSuccess = false;
    $("#cpassworderr").text("Enter valid password");
  } else {
    $("#cpassworderr").text("");
  }
  
  // Adding console log
  console.log("dob:", dob);

  if (dob === "") {
    validationSuccess = false;
    $("#doberr").text("Enter the date of birth");
  } else {
    $("#doberr").text("");
  }
  
  // Adding console log
  console.log("mobile:", mobile);

  if (mobile === "") {
    validationSuccess = false;
    $("#mobileerr").text("Enter the mobile no");
  } else {
    $("#mobileerr").text("");
  }
  
  // Adding console log
  console.log("department:", department);

  if (department === "") {
    validationSuccess = false;
    $("#departmenterr").text("select the department");
  } else {
    $("#departmenterr").text("");
  }
  
  // Adding console log
  console.log("country:", country);

  if (country === "") {
    validationSuccess = false;
    $("#countryerr").text("select the country");
  } else {
    $("#countryerr").text("");
  }
  
  // Adding console log
  console.log("gender:", gender);
}
