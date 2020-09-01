const utils = require("../utils.js");

describe("My landing page", () => {
  it(`should have the correct title (${utils.viewPort})`, () => {
    // browser.url("/");
    // let a = $('span.header-title')
    // expect(browser).toHaveTitle("localhost");
    browser.url('https://www.wikipedia.org')
    let a = $('#www-wikipedia-org > div.central-textlogo > h1 > span')
    console.log(a.getText())
  });
});
