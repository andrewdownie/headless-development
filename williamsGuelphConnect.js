const puppeteer = require('puppeteer');

(async () => {
	console.log('opening headless chrome');
	const browser = await puppeteer.launch({
		headless: true,
		ignoreHTTPSErrors: true
	});

	console.log('creating chrome page');
	const page = await browser.newPage();
	//await page.setRequestInterception(true);

	console.log('waiting for sign in page redirection');
	//await page.goto('https://customer.hotspotsystem.com/customer/hotspotlogin.php', {timeout: 0, waitUntil: "networkidle0"});
	//await page.goto('https://customer.hotspotsystem.com/customer/prelogin.php?operator=guestwifizone&location=2&lang=en&uampi=10.251.192.0&uamport=8081', {timeout: 0, waituntil: "networkidle0"});
	//await page.goto('http://logout.lan', {timeout: 0, waitUntil: "networkidle0"});

	try{
		await page.goto('https://customer.hotspotsystem.com/customer/prelogin.php?operator=GuestWiFiZone&location=2&lang=en&uamip=10.251.192.1&uamport=8081', {timeout: 0, waituntil: "networkidle0"});

		//await page.goto('https://connectivitycheck.gstatic.com/generate_204', {timeout: 0, waitUntil: "networkidle0"});
	}
	catch(e){
		console.log('error caught: ', e);
		console.log('saving page content');
		const fs = require('fs');
		fs.writeFileSync('error.html', await page.content());
		return;
	}

	console.log('saving page content');
	const fs = require('fs');
	fs.writeFileSync('html.html', await page.content());

	console.log('clicking sign in button');
	await page.click('.conbtn');

	console.log('waiting for sign in to complete');
	await page.waitForNavigation();

	await browser.close();
	console.log('done');
})();
