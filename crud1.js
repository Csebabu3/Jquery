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
        $("#fnameerr").text("Enter the first name");
    } else {
        $("#fnameerr").text("");
    }

    // Validate other form fields similarly

    if (validationSuccess) {
        const formData = {
            "FirstName": fname,
            "LastName": lname,
            "Email": email,
            "Password": password,
            "Cpassword": cpassword,
            "dob": dob,
            "mobile": mobile,
            "department": department,
            "Country": country,
            "Gender": gender
        };
        console.log(formData);

        $.ajax({
            type: "POST",
            url: "https://6465bc0c9c09d77a62f2717c.mockapi.io/Student",
            dataType: "JSON",
            data: formData,
            success: function (data) {
                console.log(data);
                // Optionally, you can add the submitted data to the storedData array
                storedData.push(data);
            },
            error: function (error) {
                console.log("Error:", error);
            }
        });
    }
}

function getData() {
    $.ajax({
        type: "GET",
        url: "https://6465bc0c9c09d77a62f2717c.mockapi.io/Student",
        success: function (data) {
            console.log(data);
            // Clear the table body before populating it with new data
            $("#tableBody").empty();

            data.forEach(function (item) {
                const row = "<tr>" +
                    "<td>" + item.FirstName + "</td>" +
                    "<td>" + item.LastName + "</td>" +
                    "<td>" + item.Email + "</td>" +
                    "<td>" + item.Password + "</td>" +
                    "<td>" + item.Cpassword + "</td>" +
                    "<td>" + item.dob + "</td>" +
                    "<td>" + item.mobile + "</td>" +
                    "<td>" + item.department + "</td>" +
                    "<td>" + item.Country + "</td>" +
                    "<td>" + item.Gender + "</td>" +
                    "</tr>";
                $("#tableBody").append(row);
            });
        },
        error: function (error) {
            console.log("Error:", error);
        }
    });
    // ... Previous code ...

function editData(index) {
    // Assuming you have an edit form with input fields for each data field
    const editedData = {
        "FirstName": $("#edit-fname").val(),
        "LastName": $("#edit-lname").val(),
        "Email": $("#edit-email").val(),
        "Password": $("#edit-password").val(),
        "Cpassword": $("#edit-cpassword").val(),
        "dob": $("#edit-dob").val(),
        "mobile": $("#edit-mobile").val(),
        "department": $("#edit-department").val(),
        "Country": $("#edit-country").val(),
        "Gender": $("#edit-gender").val()
    };

    // Perform the AJAX request to update the data
    $.ajax({
        type: "PUT",
        url: "https://6465bc0c9c09d77a62f2717c.mockapi.io/Student/" + index,
        dataType: "JSON",
        data: editedData,
        success: function (data) {
            console.log("Data updated:", data);
            // Update the corresponding row in the table
            updateTableRow(index, data);
        },
        error: function (error) {
            console.log("Error:", error);
        }
    });
}

function deleteData(index) {
    // Perform the AJAX request to delete the data
    $.ajax({
        type: "DELETE",
        url: "https://6465bc0c9c09d77a62f2717c.mockapi.io/Student/" + index,
        success: function () {
            console.log("Data deleted");
            // Remove the corresponding row from the table
            removeTableRow(index);
        },
        error: function (error) {
            console.log("Error:", error);
        }
    });
}

function updateTableRow(index, updatedData) {
    const row = $("#tableBody").find("tr").eq(index);
    row.find("td").eq(0).text(updatedData.FirstName);
    row.find("td").eq(1).text(updatedData.LastName);
    row.find("td").eq(2).text(updatedData.Email);
    row.find("td").eq(3).text(updatedData.Password);
    row.find("td").eq(4).text(updatedData.Cpassword);
    row.find("td").eq(5).text(updatedData.dob);
    row.find("td").eq(6).text(updatedData.mobile);
    row.find("td").eq(7).text(updatedData.department);
    row.find("td").eq(8).text(updatedData.Country);
    row.find("td").eq(9).text(updatedData.Gender);
}

function removeTableRow(index) {
    $("#tableBody").find("tr").eq(index).remove();
}

// ... Previous code ...
<td>
    <button class="btn btn-warning btn-sm edit" onclick="editData(index)">edit</button>
    <button class="btn btn-danger btn-sm delete" onclick="deleteData(index)">delete</button>
</td>

}
