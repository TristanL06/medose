document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("test").addEventListener("click", send_message);
    send_message("read_nfc");
});

// send infomrations to MIT ai2 through the window.AppInventor object
function send_message(message = "default") {
    window.AppInventor.setWebViewString(message);
}

function scan_result(text) {
    // trigger alert
    alert(text);
    document.getElementById("footer").innerHTML = text;
    document.getElementById("scan_result").innerHTML = text;
}