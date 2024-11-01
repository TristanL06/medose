class FunctionHolder {
    constructor() {
        this.nfc_dealer = null;
        this.barcode_dealer = null;
    }

    set_nfc_dealer(fonction) {
        this.nfc_dealer = fonction;
    }

    set_barcode_dealer(fonction) {
        this.barcode_dealer = fonction;
    }
}

var functionHolder = new FunctionHolder();

function receive_message(message) {
    if (typeof message === "object") {
        if (message.nfc_result && functionHolder.nfc_dealer) {
            functionHolder.nfc_dealer(message.nfc_result);
        } else if (message.barcode_result && functionHolder.barcode_dealer) {
            functionHolder.barcode_dealer(message.barcode_result);
        }
    }
}

function send_message(message) {
    console.log("sending message: " + message);
    if (window.AppInventor) {
        window.AppInventor.setWebViewString(message);
    }
}

function trigger_script() {
    init_local();
    if (!window.AppInventor) {
        document.body.style.maxWidth = "740px";
        document.body.style.margin = "auto";
        document.body.style.border = "1px solid black";
        document.body.style.borderRadius = "10px";
    }
}
