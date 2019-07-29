const puppeteer = require('puppeteer');


(async () => {
	console.log('opening headless chrome');
	const browser = await puppeteer.launch({
		headless: true,
		ignoreHTTPSErrors: true
	});

	console.log('waiting for redirection to login page');
	const page = await browser.newPage();
	await page.goto('https://google.ca', {timeout: 0, waitUntil: "networkidle0"});

	console.log('filling out the password field');
	await page.focus('#user_password');
	await page.keyboard.type('Cafeguest');

	console.log('clicking sign in button');
	await page.click('#btnLogin');
	console.log('waiting for sign in to complete');
	await page.waitForNavigation();
	
	console.log('closing headless chrome');
	await browser.close();
	console.log('done');
})();
