document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("test").addEventListener("click", send_message);
});

// send infomrations to MIT ai2 through the window.AppInventor object
function send_message() {
    var message = "test"
    window.AppInventor.setWebViewString(message);
}