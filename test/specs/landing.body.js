const LandingPage = require("../pageobjects/landing.page");
const utils = require("../utils.js");
const sectionTitles = [
  "About Flogistix",
  "Our Values",
  "Our Mission",
  "Contact us",
];

describe("My landing page", () => {
  it(`should have the correct section titles (${utils.viewPort})`, () => {
    browser.url("/");
    console.log();
    LandingPage.Body.cardSections.forEach((title) => {
      expect(sectionTitles).toContain(title.getText());
    });
  });
});
