$("#zip-code").on("click", function (event) {
    event.preventDefault();
    var zip = $("#zip-input").val().trim();
    console.log(zip);
});
