const puppeteer = require('puppeteer');
const express = require("express");

let links = [];

async function getImages(link) {
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
};

(async () => {
    await getImages("https://google.com");

    await console.log(links);
})();