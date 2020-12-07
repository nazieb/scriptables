const num = 20;

while (true) {
    const imgs = await Photos.latestScreenshots(num);
    if (imgs.length === 0) {
        break;
    }
    
    Photos.removeLatestScreenshots(num);

    if (imgs.length < num) {
        break;
    }
}