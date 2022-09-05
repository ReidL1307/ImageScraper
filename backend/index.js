const puppeteer = require('puppeteer');
const express = require("express");


const app = express();
const port = process.env.PORT || 8080;

let links = [];
const dotEndings = ["gif", "png", "jpg"];

async function getImages(link) {
	links = [];
	try {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		
		page.on('response', async response => {
			const url = response.url();
			if (response.request().resourceType() === 'image') {
				links.push(url)
			}

		});
		
		await page.goto(link);
		
		await browser.close();
	} catch {
		links = "INVALID_URL";
	}
};

app.get('/', async (req, res) => {
	await getImages(req.query.site);
	await res.send(links);
});

app.listen(port);
console.log('Server started at http://localhost:' + port);