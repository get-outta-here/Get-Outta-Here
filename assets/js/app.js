// //pseudo code
// var invalidzipcode = []
// function check-info() {
//     var zipcode = document.getElemenById().value;
//     if (zipcode === "" || zipcode === "invalidzipcode"){
//         alert ("Invalid ZipCode");
//     }
//     else{
//         run
//     }
// }
function validate() {
    var ValidZipCode = ["(\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2})|BFPO[ ]?\d{1,4}",
    "JE\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}",
    "GY\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}",
    "IM\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}",
    "\d{5}([ \-]\d{4})?",
    "[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ ]?\d[ABCEGHJ-NPRSTV-Z]\d",
    "\d{5}",
    "\d{3}-\d{4}",
    "\d{2}[ ]?\d{3}",
    "\d{4}",
    "\d{5}",
    "\d{4}",
    "\d{4}",
    "\d{5}",
    "\d{4}[ ]?[A-Z]{2}",
    "\d{4}",
    "\d{4}",
    "\d{3}[ ]?\d{2}",
    "\d{4}",
    "\d{5}[\-]?\d{3}",
    "\d{4}([\-]\d{3})?",
    "\d{5}",
    "22\d{3}",
    "\d{3}[\-]\d{3}",
    "\d{6}",
    "\d{3}(\d{2})?",
    "\d{6}",
    "\d{5}",
    "AD\d{3}",
    "([A-HJ-NP-Z])?\d{4}([A-Z]{3})?",
    "(37)?\d{4}",
    "\d{4}",
    "((1[0-2]|[2-9])\d{2})?",
    "\d{4}",
    "(BB\d{5})?",
    "\d{6}",
    "[A-Z]{2}[ ]?[A-Z0-9]{2}",
    "\d{5}",
    "BBND 1ZZ",
    "[A-Z]{2}[ ]?\d{4}",
    "\d{4}",
    "\d{5}",
    "\d{4}",
    "\d{7}",
    "\d{4,5}|\d{3}-\d{4}",
    "\d{5}",
    "\d{4}",
    "\d{3}[ ]?\d{2}",
    "\d{5}",
    "([A-Z]\d{4}[A-Z]|(?:[A-Z]{2})?\d{6})?",
    "\d{5}",
    "\d{5}",
    "\d{3}",
    "\d{4}",
    "\d{3}[ ]?\d{2}",
    "39\d{2}",
    "\d{5}",
    "\d{4}",
    "(?:\d{5})?",
    "\d{4}",
    "\d{3}",
    "\d{6}",
    "\d{5}",
    "\d{5}",
    "\d{5}",
    "\d{6}",
    "\d{5}",
    "\d{5}",
    "\d{5}",
    "\d{4}",
    "(\d{4}([ ]?\d{4})?)?",
    "(948[5-9])|(949[0-7])",
    "\d{5}",
    "\d{4}",
    "\d{4}",
    "\d{5}",
    "\d{5}",
    "[A-Z]{3}[ ]?\d{2,4}",
    "(\d{3}[A-Z]{2}\d{3})?",
    "\d{5}",
    "\d{4}",
    "980\d{2}",
    "\d{5}",
    "\d{5}",
    "\d{4}",
    "((\d{4}-)?\d{3}-\d{3}(-\d{1})?)?",
    "(\d{6})?",
    "(PC )?\d{3}",
    "\d{5}",
    "\d{4}",
    "\d{4}",
    "\d{2}-\d{3}",
    "00[679]\d{2}([ \-]\d{4})?",
    "\d{6}",
    "\d{6}",
    "4789\d",
    "\d{5}",
    "\d{5}",
    "\d{3}[ ]?\d{2}",
    "\d{4}",
    "\d{4}",
    "\d{5}",
    "\d{6}",
    "\d{5}",
    "\d{4}",
    "\d{5}",
    "\d{6}",
    "\d{5}",
    "\d{5}",
    "\d{6}",
    "00120",
    "\d{4}",
    "\d{5}",
    "96799",
    "6799",
    "\d{4}",
    "\d{6}",
    "8\d{4}",
    "\d{5}",
    "\d{5}",
    "6798",
    "\d{4}",
    "FIQQ 1ZZ",
    "2899",
    "(9694[1-4])([ \-]\d{4})?",
    "9[78]3\d{2}",
    "\d{3}",
    "9[78][01]\d{2}",
    "SIQQ 1ZZ",
    "969[123]\d([ \-]\d{4})?",
    "\d{4}",
    "\d{4}",
    "\d{5}",
    "\d{6}",
    "\d{4}",
    "\d{3}",
    "\d{3}",
    "969[67]\d([ \-]\d{4})?",
    "\d{6}",
    "9695[012]([ \-]\d{4})?",
    "9[78]2\d{2}",
    "988\d{2}",
    "\d{4}",
    "008(([0-4]\d)|(5[01]))([ \-]\d{4})?",
    "987\d{2}",
    "\d{3}",
    "9[78]5\d{2}",
    "PCRN 1ZZ",
    "96940",
    "9[78]4\d{2}",
    "(ASCN|STHL) 1ZZ",
    "\d{4}",
    "\d{5}",
    "[HLMS]\d{3}",
    "TKCA 1ZZ",
    "986\d{2}",
    "\d{5}",
    "976\d{2}"];
    console.log(
    alert(InvalidCode));
};

// ^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

function validation() {
    var postalCode = document.getElementById('postal-code').value;
    var postalRGEX = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
    // var phoneResult = phoneRGEX.test(phoneNumber);
    var postalResult = postalRGEX.test(postalCode);
    alert("postal code: " + postalResult);
};
// package valZipCode;
// import java.util.regex.Matcher;
// import java.util.regex.pattern;
// import javax.swing.JOptionPane;

// var valZipCode {
//     public static void main (string [] args);
//     string zipcode = "92651";
//     JOptionPane.showMessageDialog(null,valZipCode(zipcode));
// };
// public static boolean valZipCode(string zipcode){
//     string regex = "/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/";
//     pattern PC = pattern.compile(regex);
//     Matcher matcher = PC.matcher(zipcode);
//     boolean resulte = matcher.find();
//     return result;
// };