$("#formvalidation").validate({
    rules:{
        name:{
            minlength:2
        },
        email:{
            email:true
        },
        phone:{
            number:true,
            minlength:10,
            maxlength:10
        },
        department:{
            required:true
          }
    },
    messages:{
        name:{
            required:"please enter a name",
            minlength:"Name at least 2 characters"
        },
        email:"please enter your email",
        phone:"please enter your phone",
        subject:"please enter your subject",
        formMessage:"please enter your formmessage"
       
    },
    submitHandler: function(form) {
      form.submit();
    }
   });