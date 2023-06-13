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
