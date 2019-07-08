function validateZipCode(elementValue){
    var zipCodePattern = /^\d{5}$|^\d{5}-\d{4}$/;
     return zipCodePattern.test(elementValue);
}

$("#zipbutton").on("click" , function () {
    console.log("");
    var zipcode = $("#validatezipcode").val()
    console.log(zipcode);
    var isValidZip = validateZipCode(zipcode)
    console.log(isValidZip)
    if (!isValidZip){
        $("#ziperror").css("display", "block")
    }
});

