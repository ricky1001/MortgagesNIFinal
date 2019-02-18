
var data;
/*
$('#form-action').click(function(event) {
    event.preventDefault();

    $.ajax({
        global: false,
        type: 'POST',
        url: "/send",
        dataType: 'html',
        data: {
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            email: $("#email").val(),
            contactNumber: $("#email").val(),
            message: $("#message").val()
        },
        
        success: function (result) {
            
            console.log(data);
            console.log(result);
        },
        error: function (request, status, error) {
            serviceError();
        }
    });
});


*/

var sent = document.querySelector(".message");

$('#form-action').click(function(event) {
    event.preventDefault();

        var data = {
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        email: $("#email").val(),
        contactNumber: $("#contactNumber").val(),
        message: $("#message").val()
       }

       $('#main-form')[0].reset();
       sent.className = "message-sent";

       

    $.ajax({
        global: false,
        type: 'POST',
        url: "/send",
        dataType: 'html',
        data: data,
        
        success: function (result) {
             
        },
        error: function (request, status, error) {
            serviceError();
        }
    });
});



