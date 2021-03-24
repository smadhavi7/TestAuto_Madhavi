const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();
  await page.goto('https://www.sheffield.ac.uk');
  await page.screenshot({ path: 'shef.png' });
//search term

const result = await page.evaluate(() =>  {
   let footer = document.querySelectorAll(".large-5 columns copyright") ;
return (footer);
});
console.log(result);
 // await browser.waitForTarget (() =>  false);
  await browser.close();
})();