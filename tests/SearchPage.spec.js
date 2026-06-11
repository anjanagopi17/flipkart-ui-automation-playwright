const {test,expect} = require('../fixtures/BaseFixture');
const SearchPage = require('../pages/SearchPage');
const env = require('../config/env');
const  SearchData = require('../testdata/SearchData');

test('Search for a product', async ({ page }) => {
    
    const searchPage = new SearchPage(page);

    await searchPage.goto();
    await searchPage.searchForProduct(SearchData.product1);
    
    //verify URL changed 
  //  await expect(page).toHaveURL(`${env.baseURL}search?q=${encodeURIComponent(SearchData.product1)}&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off`);

    //verify search box value
    await expect(searchPage.resultsHeading).toBeVisible();

});


