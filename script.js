 const form = document.forms[0];
 const link = document.querySelector("#checkLink");

 		link.addEventListener("click", function () {
            alert(form.checkValidity()); 
        });

        form.addEventListener("submit", function (e) {
            alert("The form has been sent");
        });

        form.addEventListener("change", eventHandler)
        form.addEventListener("invalid", eventHandler, true); 
    

        function eventHandler(e) {
            if (e.target.tagName != "INPUT") {
                return;
            }
            checkErrorAndSetMessage(e.target);
        }

        function checkErrorAndSetMessage(input) {
            if (input.validity.valueMissing) {
                input.setCustomValidity("All fields must be filled in!");
            }
            else if (input.validity.tooShort) {
                input.setCustomValidity("The value cannot be less than 8 characters");
            }
            else if (input.validity.tooLong) {
                input.setCustomValidity("The value cannot be more than 16 characters");
            }
            else if (input.validity.typeMismatch) {
                input.setCustomValidity("Invalid data type entered");
            }
            else {
                input.setCustomValidity("");
            }
        }