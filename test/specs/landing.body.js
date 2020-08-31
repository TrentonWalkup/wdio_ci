const LandingPage = require("../pageobjects/landing.page");
const utils = require("../utils.js");
const sectionTitles = [
  "About Flogistix",
  "Our1 Values",
  "Our Mission",
  "Contact us",
];

describe("My landing page", () => {
  it(`should have the correct section titles (${utils.viewPort})`, () => {
    browser.url("/");
    LandingPage.Body.cardSections.forEach((title) => {
      console.log(title.getText())
      expect(sectionTitles).toContain(title.getText());
    });
  });
});
