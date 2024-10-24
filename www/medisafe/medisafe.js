document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("test").addEventListener("click", send_message);
    send_message("read_nfc");
});

function receive_message(message) {
    // if message if type of a dictionary, set message as value
    if (typeof message === "object") {
        message = message.scan_result;
    }
    alert(message);
}