const BasePage = require('./BasePage');

const env = require('../config/env');
const SearchData = require('../testdata/SearchData');


class SearchPage extends BasePage {
    constructor(page) { 
        super(page);
        this.searchBox = page.getByRole('textbox', { name: 'Search for Products, Brands and More' });
        this.resultsHeading = page.getByText('iPhone 14 Pro Max (Deep Purple, 128 GB)', { exact: true });

        }



    async goto() {
        await this.navigateToURL(env.baseURL);
    }

    

    async searchForProduct() {
        await this.searchBox.fill(SearchData.product1);
        await this.searchBox.press('Enter');
        //verify search  value in the results page
       // await expect(searchPage.resultsHeading).toHaveText(`Showing results for "${SearchData.product1}"`);

    }   

        
    
}
module.exports = SearchPage;