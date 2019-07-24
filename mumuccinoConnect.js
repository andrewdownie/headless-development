const puppeteer = require('puppeteer');

/*
		args: [
			"--proxy-server='direct://'",
			'--proxy-bypass-list=*',
			'--disable-gpu',
			'--disable-dev-shm-usage',
			'--disable-setuid-sandbox',
			'--no-first-run',
			'--no-sandbox',
			'--no-zygote',
			'--single-process',
			'--ignore-certificate-errors',
			'--ingore-certificate-error-spki-list',
			'--enable-features=NetworkService'

		]
*/

		//ignoreHTTPSErrors: true

(async () => {
	const browser = await puppeteer.launch({
		headless: true,
		ignoreHTTPSErrors: true
	});
	const page = await browser.newPage();
	//await page.setRequestInterception(true);

	page.on("request", request => {
		/*
		console.log(request.url());
		request.continue();
		*/
	});
	
	await page.goto('https://google.ca', {timeout: 0, waitUntil: "networkidle0"});
	await page.screenshot({path: '1TryingToLoadASite.png'});

	// Wait for redirect to starbucks login
	//await page.waitForNavigation();
	
	//console.log('write html to file, so I can tell wtf I need to select');
	//let html = await page.content();
	//const fs = require('fs');
	//fs.writeFileSync('htmlContent.txt', html);
	

	console.log('select and fill out the password field');
	await page.focus('#user_password');
	await page.keyboard.type('Cafeguest');
	
	

	console.log('now onto trying to click a button');


	// Click the login button
	await page.screenshot({path: '2LoginPage.png'});
	await page.click('#btnLogin');
	//await page.click('[name="commit"]');

	// Wait login to complete
	await page.waitForNavigation();

	await page.screenshot({path: '3LoginComplete.png'});
	await browser.close();
})();
