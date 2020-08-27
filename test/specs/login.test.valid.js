const LoginPage = require("../pageobjects/login.page");
const utils = require("../utils.js");

describe("My Login application", () => {
  it(`should login with valid credentials (${utils.viewPort})`, () => {
    browser.url("https://the-internet.herokuapp.com/login");
    LoginPage.loginForm.login("tomsmith", "SuperSecretPassword!");
    expect(LoginPage.loginForm.loginMessage).toHaveAttribute(
      "class",
      "flash success"
    );
  });
});
