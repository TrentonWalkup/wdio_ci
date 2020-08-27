exports.config = {
  runner: "local",

  specs: ["./test/specs/**/*.js"],

  exclude: [],

  maxInstances: 10,

  capabilities: [
    {
      maxInstances: 5,

      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--window-size=200,1000"], //mobile responsive
        prefs: {
          "profile.managed_default_content_settings.popups": 2,
          "profile.managed_default_content_settings.notifications": 2,
        },
      },
      acceptInsecureCerts: true,
    },
    {
      maxInstances: 5,

      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--window-size=1200,900"], //average size monitor
        prefs: {
          "profile.managed_default_content_settings.popups": 2,
          "profile.managed_default_content_settings.notifications": 2,
        },
      },
      acceptInsecureCerts: true,
    },
  ],

  logLevel: "silent",

  bail: 0,

  baseUrl: "http://localhost:3000",

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  services: ["chromedriver"],

  framework: "mocha",

  reporters: ["spec"],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
