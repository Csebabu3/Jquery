let validationSuccess;
let EmpData = {};

function employee(event) {
    event.preventDefault();
    //retriving
    const id =$("#id").val();
    const empname = $("#empname").val();
    const empemail = $("#empemail").val();
    const emppassword = $("#emppassword").val();
    const empcpassword = $("#empcpassword").val();
    const empmobileno = $("#empmobileno").val();
    const empqualifiction = $("#empqualifiction").val();
    const empdob = $("#empdob").val();
    const empgender = $("#empgender").val();
    
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    validationSuccess = true;

    if (empname === "") {
        validationSuccess = false;
        $("#empnameerr").text("Please enter the first name");
    } else {
        $("#empnameerr").text("");
    }
    
    if (empemail === "") {
        validationSuccess = false;
        $("#empemailerr").text("Please enter the email id");
    } else if (!regex.test(empemail)) {
        validationSuccess = false;
        $("#empemailerr").text("Please enter a valid email address");
    } else {
        $("#empemailerr").text("");
    }
    
    if (emppassword === "") {
        validationSuccess = false;
        $("#emppassworderr").text("Please enter the password");
    } else {
        $("#emppassworderr").text("");
    }
    
    if (empcpassword === "") {
        validationSuccess = false;
        $("#empcpassworderr").text("Please enter the confirm password");
    } else if (emppassword !== empcpassword) {
        validationSuccess = false;
        $("#empcpassworderr").text("Passwords do not match");
    } else {
        $("#empcpassworderr").text("");
    }
    
    if (empmobileno === "") {
        validationSuccess = false;
        $("#empmobilenoerr").text("Please enter the mobile no");
    } else if (empmobileno.length !== 10) {
        validationSuccess = false;
        $("#empmobilenoerr").text("Please enter a valid 10-digit mobile no");
    } else {
        $("#empmobilenoerr").text("");
    }
    
    if (empqualifiction === "") {
        validationSuccess = false;
        $("#empqualifictionerr").text("Please enter the qualification");
    } else {
        $("#empqualifictionerr").text("");
    }
    
    if (empdob === "") {
        validationSuccess = false;
        $("#empdoberr").text("Please enter the date of birth");
    } else {
        $("#empdoberr").text("");
    }
    
    if (empgender === "") {
        validationSuccess = false;
        $("#empgendererr").text("Please enter a gender");
    } else {
        $("#empgendererr").text("");
    }

    let Employee = {
        "Empname": empname,
        "Empemail": empemail,
        "Emppassword": emppassword,
        "Empcpassword": empcpassword,
        "Empmobileno": empmobileno,
        "Empqualifiction": empqualifiction,
        "Empdob": empdob,
        "Empgender": empgender
    };

    console.log(Employee);

    if (id == "") {
        $.ajax({
            type: "POST",
            url: "https://6465bc0c9c09d77a62f2717c.mockapi.io/Employee",
            dataType: "JSON",
            data: Employee,
            success: function(data) {
                console.log(data);
                location.reload();
            }
        });
    } else {
        $.ajax({
            type: "PUT",
            url: "https://6465bc0c9c09d77a62f2717c.mockapi.io/Employee/" + EmpData.id,
            dataType: "JSON",
            data: Employee,
            success: function(data) {
                console.log(data);
                location.reload();
            }
        });
    }
}

function getData() {
    $.ajax({
        type: "GET",
        url: "https://6465bc0c9c09d77a62f2717c.mockapi.io/Employee",
        success: function(data) {
            console.log(data);
            for (i = 0; i < data.length; i++) {
                const text = "<tr>" +
                    "<td>" + data[i].Empname + "</td>" +
                    "<td>" + data[i].Empemail + "</td>" +
                    "<td>" + data[i].Emppassword + "</td>" +
                    "<td>" + data[i].Empcpassword + "</td>" +
                    "<td>" + data[i].Empmobileno + "</td>" +
                    "<td>" + data[i].Empqualifiction + "</td>" +
                    "<td>" + data[i].Empdob + "</td>" +
                    "<td>" + data[i].Empgender + "</td>" +
                    "<td>" + "<button type='button' class='btn btn-warning btn-sm' onclick='editRow(" + data[i].id + ")'>Edit</button>" + "</td>" +
                    "<td>" + "<button type='button' class='btn btn-danger btn-sm' onclick='deleteRow(" + data[i].id + ")'>Delete</button>" + "</td>" +
                    "</tr>";
                $("#tableBody").append(text);
               
            }
        }
    });
}

function editRow(id) {
    $.ajax({
        type: "GET",
        url: "https://6465bc0c9c09d77a62f2717c.mockapi.io/Employee/" + id,
        success: function(response) {
            $('#id').val(response.id)
            $("#empname").val(response.Empname);
            $("#empemail").val(response.Empemail);
            $("#emppassword").val(response.Emppassword);
            $("#empcpassword").val(response.Empcpassword);
            $("#empmobileno").val(response.Empmobileno);
            $("#empqualifiction").val(response.Empqualifiction);
            $("#empdob").val(response.Empdob);
            $("#empgender").val(response.Empgender);
            EmpData = response;
        }
    });
}

function deleteRow(id) {
    $.ajax({
        type: "DELETE",
        url: "https://6465bc0c9c09d77a62f2717c.mockapi.io/Employee/" + id,
        success: function() {
            alert('This row is deleted.');
            location.reload();
        }
    });
}
