
var data;


var sent = document.querySelector(".message");

$('#form-action').click(function(event) {
    dataLayer.push({'event' : 'formSubmitted', 'formName' : 'Contact Us'});
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



