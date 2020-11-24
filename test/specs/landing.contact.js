const LandingPage = require('../pageobjects/landing.page');
const utils = require('../utils.js');

describe('The contact section', () => {
  it(`should render (${utils.viewPort})`, () => {
    browser.url('/');
    let a = browser.getUrl();
    console.log(a);
    expect(LandingPage.Contact.contactForm).toExist;
  });
});
