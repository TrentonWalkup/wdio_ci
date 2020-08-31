const utils = require("../utils.js");

describe("My landing page", () => {
  it(`should have the correct title (${utils.viewPort})`, () => {
    browser.url("/");
    let a = $('span.header-title')
    console.log(browser.getTitle())
    // expect(browser).toHaveTitle("Flogistix-Test");
  });
});
