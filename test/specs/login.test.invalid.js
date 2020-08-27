const LoginPage = require("../pageobjects/login.page");
const utils = require("../utils.js");

describe("My Login application", () => {
  it(`should not login with invalid credentials (${utils.viewPort})`, () => {
    browser.url("https://the-internet.herokuapp.com/login");
    LoginPage.loginForm.login("tomsmith", "IncorrectPassword!");

    expect(LoginPage.loginForm.loginMessage).toHaveAttribute(
      "class",
      "flash error"
    );
  });
});
