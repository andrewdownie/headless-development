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
	//
	//
	console.log('now onto trying to click a button');

	// Click the starbucks login button
	await page.screenshot({path: '2LoginPage.png'});
	await page.click('.conbtn');
	//await page.click('[name="commit"]');

	// Wait login to complete
	await page.waitForNavigation();

	await page.screenshot({path: '3LoginComplete.png'});
	await browser.close();
})();
