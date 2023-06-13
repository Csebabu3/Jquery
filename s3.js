$("#student-form").validate({
    rules:{
        username:{
            required:true,
            minlength:4
        },
        email:{
            required:true,
            email:true
        },
        password:{
            required:true
        },
        cpassword:{
            required:true,
            equalTo:"#password"
        },
        Mobile:{
            required:true,
            minlength:10,
            maxlength:10
        },
        dob:{
            required:true
        },
        Address:{
            required:true
        },
        department:{
            required:true
        },
        gender:{
            required:true
        }
        
    },
    messages:{
        username:{
          required:"Please enter your username",
          minlength:"please enter minimum 4 char"
        },
        email:{
            required:"please enter email",
            email:"invalid email"
        },
        password:{
            required:"please enter password"
        },
        cpassword:{
            required:"please enter cpassword",
            equalTo:"password is mismatch"
        },
        Mobile:{
            required:"please enter mobile no",
            minlength:"minimum 10 digit",
            maxlength:"maximum 10 digit"
        },
        dob:{
            required:"please enter date of birth"
        },
        Address:{
            required:"please enter address"
        },
        department:{
            required:"please  enter department"
        }
        


    },
    submitHandler: function(form) {
      form.submit();
    }
   });