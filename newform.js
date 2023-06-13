let storedData = [];
let validationSuccess;


function claaval(event) {
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



    if (lname === "") {
        validationSuccess = false;
        $("#lnameerr").text("Enter the lname");
    } else {
        $("#lnameerr").text("");
    }



    if (email === "") {
        validationSuccess = false;
        $("#emailerr").text("Enter the Email");
    } else {
        $("#emailerr").text("");
    }



    if (password === "") {
        validationSuccess = false;
        $("#passworderr").text("Enter the password");
    } else {
        $("#passworderr").text("");
    }



    if (cpassword === "") {
        validationSuccess = false;
        $("#cpassworderr").text("Enter the cpassword");
    } else if (password !== cpassword) {
        validationSuccess = false;
        $("#cpassworderr").text("Enter valid password");
    } else {
        $("#cpassworderr").text("");
    }



    if (dob === "") {
        validationSuccess = false;
        $("#doberr").text("Enter the date of birth");
    } else {
        $("#doberr").text("");
    }



    if (mobile === "") {
        validationSuccess = false;
        $("#mobileerr").text("Enter the mobile no");
    }
    else if (mobile.length !== 10) {
        validationSuccess = false;
        $("#mobileerr").text("Enter valid mobile no");
    } else {
        $("#mobileerr").text("");
    }



    if (department === "") {
        validationSuccess = false;
        $("#departmenterr").text("select the department");
    } else {
        $("#departmenterr").text("");
    }



    if (country === "") {
        validationSuccess = false;
        $("#countryerr").text("select the country");
    } else {
        $("#countryerr").text("");
    }



    if (gender === "") {
        validationSuccess = false;
        $("#gendererr").text("select the gender");
    } else {
        $("#gendererr").text("");
    }


    var formData = {
        "FirstName": fname,
        "LastName": lname,
        "Email": email,
        "Password": password,
        "Cpassword": cpassword,
        "dob": dob,
        "mobile": mobile,
        "department": department,
        "Country": country,
        "Gender": gender,
    };
    console.log(formData);

    $.ajax({
        type: "POST",
        url: "https://6465bc0c9c09d77a62f2717c.mockapi.io/Student",
        dataType: "JSON",
        data: formData,
        success: function (data) {
            console.log(data);

        }
    });

}
function getData() {
    $.ajax({
        type: "GET",
        url: "https://6465bc0c9c09d77a62f2717c.mockapi.io/Student",
        success: function (data) {
            console.log(data);
            for(i=0;i<data.length;i++){
                let text = 
                "<td>" + data[i].FirstName + "</td>"+
                "<td>" + data[i].LastName + "</td>"+
                "<td>" + data[i].Email + "</td>"+
                "<td>" + data[i].Password + "</td>"+
                "<td>" + data[i].Cpassword + "</td>"+
                "<td>" + data[i].dob + "</td>"+
                "<td>" + data[i].mobile + "</td>"+
                "<td>" + data[i].department + "</td>"+
                "<td>" + data[i].Country + "</td>"+ 
                "<td>" + data[i].Gender + "</td>"
                // <td>
                //     <a href="#" class="btn btn-warning btn-sm edit">edit</a>
                //     <a href="#" class="btn btn-danger btn-sm delete">delete</a>
                // </td>
                
                document.getElementById('tableBody').innerHTML+=text;
            }
        }

    });
   

}