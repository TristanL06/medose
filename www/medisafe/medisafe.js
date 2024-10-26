document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("test").addEventListener("click", send_message);
    send_message("read_nfc");
});