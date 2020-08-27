const loginForm = {
  get inputUsername() {
    return $("#username");
  },
  get inputPassword() {
    return $("#password");
  },
  get btnSubmit() {
    return $('button[type="submit"]');
  },

  get loginMessage() {
    return $("#flash");
  },

  login(username, password) {
    this.inputUsername.setValue(username);
    this.inputPassword.setValue(password);
    this.btnSubmit.click();
  },
};

module.exports = { loginForm };
