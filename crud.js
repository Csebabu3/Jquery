
let validationSuccess;
let staff = {};


function claaval(event) {
    event.preventDefault();
    const id=$("#id").val();
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
if(id ==""){
    $.ajax({
        type:"POST",
        url:"https://6465bc0c9c09d77a62f2717c.mockapi.io/mockAPI",
        datatype:"JSON",
        data:formData,
        success: function(data){
            console.log(data);
            location.reload();
        }
    });
}
   else{
    $.ajax({
        type:"PUT",
        url:"https://6465bc0c9c09d77a62f2717c.mockapi.io/mockAPI/"+staff.id,
        datatype:"JSON",
        data:formData,
        success: function(data){
            console.log(data);
            location.reload();
        }
    });
   }
}
function getData(){
    $.ajax({
        type:"GET",
        url:"https://6465bc0c9c09d77a62f2717c.mockapi.io/mockAPI",
        success:function(data){
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
                "<td>" + data[i].Gender + "</td>"+
                "<td>" + "<button type='button' class='btn btn-warning btn-sm' onclick='editRow ("+
                data[i].id +")'>Edit</button>"+"<td>"+
                "<td>" + "<button type='button' class='btn btn-danger btn-sm' onclick='deleteRow("+data[i].id+")'>Delete</button>"+"</td>"
            
                document.getElementById('tableBody').innerHTML+=text;
            }
        }
    });
}
function editRow(id){
    $.ajax({
        type:"GET",
        url:"https://6465bc0c9c09d77a62f2717c.mockapi.io/mockAPI/"+id,
        success:function(response){
            $("#id").val(response.id)
            $("#fname").val(response.FirstName);
            $("#lname").val(response.LastName);
            $("#email").val(response.Email);
            $("#password").val(response.Password);
            $("#cpassword").val(response.Cpassword);
            $("#dob").val(response.dob);
            $("#mobile").val(response.mobile);
            $("#department").val(response.department);
            $("#country").val(response.Country);
            $("#gender").val(response.Gender);
            staff = response;
        }
    })
}
function deleteRow(id){
    $.ajax({
        type:"DELETE",
        url:"https://6465bc0c9c09d77a62f2717c.mockapi.io/mockAPI/"+id,
        success:function(){
            alert('this row is delete')
            location.reload();
        }
    })
}
