$("#myForm").validate({
    rules:{
        name:{
            required:true
        },
        fname:{
            required:true
        },
        dob:{
            required:true
        },
        email:{
            required:true
        },
        password:{
            required:true
        },
        cpassword:{
            required:true
        },
        Address:{
            required:true
        },
        mobile:{
            required:true
        },
        gender:{
            required:true
        },
        Qualification:{
            required:true
        },
        Languages:{
            required:true
        }

    },
    submitHandler: function(form) {
      form.submit();
    }
   });