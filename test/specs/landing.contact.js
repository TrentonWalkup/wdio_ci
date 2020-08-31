const LandingPage = require("../pageobjects/landing.page");
const utils = require("../utils.js");

describe("The contact section", () => {
  it(`should render (${utils.viewPort})`, () => {
    browser.url("/");
    expect(LandingPage.Contact.contactForm).toExist;
    expect(1+3).toEqual(1)
  });
});
