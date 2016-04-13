$(function() {
    var dataPackage = {
        "firstName": '',
        "lastName": '',
        "email": '',
        "subject": '',
        "comments": ''
    };

    // get control of my form to prevent it from submitting in the traditional manner
    $(".contact").on("submit", function(e) {
        // run our validation.  Check for a true or false result.
        if(inputCheck()) {
            //if the form is valid:
            // submit form
            // populate package with data as a prelude to sending the data to the server.
            dataPackage.firstName = $('#firstName').val();
            dataPackage.lastName = $('#lastName').val();
            dataPackage.email = $('#emailAddr').val();
            dataPackage.subject = $('#subject').val();
        } else {
            e.preventDefault();
        }
    });
    var inputCheck = function() {
        // we're going to increment a counter for every valid field.
        var isValid = 0;
        // loop over the input fields and check them for a value
        $.each($('input:text'), function(i, val) {
            console.log(this);
            if($(val).val() === '') {
                // no value?  Add an error class.
                $(val).parent().addClass('error');
            } else {
                // value?  remove the error class.
                $(val).parent().removeClass('error');
                // increment the valid counter
                isValid++;
            }
        });
        // check the return value of the emailChecker function which is defined further down.
        if(!emailChecker($('#emailAddr').val())){
            //if the email is invalid:
            $('#emailAddr').parent().addClass('emailError');
        } else {
            //if the email is valid:
            //remove error class
            $('#emailAddr').parent().removeClass('emailError');
            //increment the valid counter
            isValid++;
        }
        //final check for the valid count.
        if(isValid === 5) {
            return true;
        } else {
            return false;
        }
    };
    function emailChecker(email){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
});