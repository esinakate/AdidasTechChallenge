const puppeteer = require('puppeteer'); //access to puppeteer library

async function getItems() {
const browser = await puppeteer.launch({ headless: false });
const page = await browser.newPage(); // open new browser window
page.on('dialog', async dialog => {
console.log("massage:", dialog.message()); //show pop-up alert message 
dialog.dismiss(); //close pop-up alert message 
});
await page.goto('https://www.demoblaze.com/index.html');  //insert url address
const clickPhones = await page.waitForXPath("//a[contains(text(), 'Phones')]");  //search element using XPath
await clickPhones.click();  // click on the element
const clickLaptops1 = await page.waitForXPath("//a[contains(text(), 'Laptops')]"); //search element using XPath
await clickLaptops1.click(); // click on the element
const clickMonitors = await page.waitForXPath("//a[contains(text(), 'Monitors')]"); //search element using XPath
await clickMonitors.click(); // click on the element
const clickLaptops = await page.waitForXPath("//a[contains(text(), 'Laptops')]"); //search element using XPath
await clickLaptops.click(); // click on the element
const clickSony = await page.waitForXPath("//a[contains(text(), 'Sony vaio i5')]"); //search element using XPath
await clickSony.click(); // click on the element
const clickAdd = await page.waitForXPath("//a[contains(text(), 'Add to cart')]"); //search element using XPath
await clickAdd.click(); // click on the element
await page.waitForTimeout(2000);

const clickLogo = await page.waitForXPath("//a[@class='navbar-brand']");
await clickLogo.click(); // click on the element
const clickLaptops2 = await page.waitForXPath("//a[contains(text(), 'Laptops')]");
await clickLaptops2.click(); // click on the element
const clickDell = await page.waitForXPath("//a[contains(text(), 'Dell i7 8gb')]");
await clickDell.click(); // click on the element
const clickAddDell = await page.waitForXPath("//a[contains(text(), 'Add to cart')]");
await clickAddDell.click(); // click on the element
await page.waitForTimeout(2000);

const clickCart = await page.waitForXPath("//a[contains(text(), 'Cart')]");
await clickCart.click(); // click on the element
const clickDelete = await page.waitForXPath("/html/body/div[6]/div/div[1]/div/table/tbody/tr[1]/td[4]/a");
await clickDelete.click(); // click on the element
await page.waitForTimeout(2000);
const clickOrder = await page.waitForXPath("//button[contains(text(), 'Place Order')]");
await clickOrder.click(); // click on the element
await page.waitForTimeout(100); //waiting form to be opened
const clickInputName = await page.waitForXPath("//input[@id='name']"); // search element using XPath
await page.waitForTimeout(100); 
await clickInputName.type('Ekaterina'); // filling in the information
const clickInputCountry = await page.waitForXPath("//input[@id='country']");
await clickInputCountry.type('Spain');
const clickInputCity = await page.waitForXPath("//input[@id='city']");
await clickInputCity.type('Malaga');
const clickInputCard = await page.waitForXPath("//input[@id='card']");
await clickInputCard.type('1234 5678 9012 0000');
const clickInputMonth = await page.waitForXPath("//input[@id='month']");
await clickInputMonth.type('11');
const clickInputYear = await page.waitForXPath("//input[@id='year']");
await clickInputYear.type('2023');

const clickPurchase = await page.waitForXPath("//button[contains(text(), 'Purchase')]");
await clickPurchase.click();


const priceCart = await page.waitForXPath("//h3[@id='totalp']"); // search for the price value in the cart
const priceCartValue = await page.evaluate(el => el.textContent, priceCart); // saving the price value in the cart
console.log('priceCart=', priceCartValue); // output price to console 

const priceOrder = await page.waitForXPath("/html/body/div[10]/p/text()[2]"); // search for the price value in the order
const priceOrderValue = await page.evaluate(el => el.textContent, priceOrder); // saving the price value in the order
const priceOrderValue2 = priceOrderValue.slice(8, 11); // cut off the symbols, leaving only the price
console.log('priceOrderValue=', priceOrderValue2);

if (priceCartValue === priceOrderValue2) { //checking that the price in cart and order match 
console.log('priceCartValue === priceOrderValue2')
const clickOk = await page.waitForXPath("//button[contains(text(), 'OK')]"); // search element OK using XPath
await clickOk.click(); // clock OK
} else {
console.log('eror price'); // if the condition is not met - error output

}

await page.waitForTimeout(200);

browser.close();
}

getItems();