


const puppeteer = require('puppeteer');

( async () => {
    console.log('abrimos nav');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/node.js');
    const titulo1 = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        console.log(h1);
        return h1.innerHTML;
    })
    console.log(titulo1);
    console.log('cerramos nav');
    browser.close();
    console.log('nav cerrado');
})();