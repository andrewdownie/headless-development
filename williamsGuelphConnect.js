const puppeteer = require('puppeteer');

(async () => {
	console.log('opening headless chrome');
	const browser = await puppeteer.launch({
		headless: true,
		ignoreHTTPSErrors: true
	});

	console.log('creating chrome page');
	const page = await browser.newPage();


	console.log('waiting for sign in page redirection');
	try{
		//await page.goto('https://customer.hotspotsystem.com/customer/prelogin.php?operator=GuestWiFiZone&location=2&lang=en&uamip=10.251.192.1&uamport=8081', {timeout: 0, waituntil: "networkidle0"});
		await page.goto('https:customer.hotspotsystem.com/customer/hotspotlogin.php&res=notyet&uamip=10.251.192.1&uamport=8081&ssid=Williams-Guest&nasid=GuestWiFiZone_2', {timeout: 0, waituntil: "networkidle0"});

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
