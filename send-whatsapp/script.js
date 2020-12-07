const alert = new Alert();
alert.title = "Enter phone number";
alert.addTextField();
alert.addAction("OK");

await alert.present();

let phone = alert.textFieldValue(0);
phone = phone.replace("+", "").replaceAll(" ", "");

if (phone[0] === "0") {
    // 62 is code for Indonesia
    // replace this with your country code if needed
    phone = phone.replace("0", "62");
}

if (phone === "") {
    Script.complete();
    return;
}

const deeplink = "whatsapp:\/\/send?phone=" + phone;
Safari.open(deeplink, false);