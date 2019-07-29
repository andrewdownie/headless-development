const puppeteer = require('puppeteer');

(async () => {
	console.log('opening headless chrome');
	const browser = await puppeteer.launch({
		headless: true,
		ignoreHTTPSErrors: true
	});

	console.log('waiting for sign in page redirection');
	const page = await browser.newPage();
	await page.goto('https://google.ca', {timeout: 0, waitUntil: "networkidle0"});

	console.log('clicking sign in button');
	await page.click('.conbtn');

	console.log('waiting for sign in to complete');
	await page.waitForNavigation();

	await browser.close();
	console.log('done');
})();
