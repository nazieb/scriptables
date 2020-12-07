let url;
if (args.urls.length > 0 || args.plainTexts.length > 0) {
    url = args.urls[0] || args.plainTexts[0];
}

if (!url || (url.indexOf("https:\/\/") !== 0 && url.indexOf("http:\/\/") !== 0)) {
    Script.complete();
    return;
}

const deeplink = url.replace("http", "googlechrome");
Safari.open(deeplink, false);