exports.config = {
  runner: 'local',

  specs: ['./test/specs/**/*.js'],

  exclude: [],

  maxInstances: 10,

  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
        headless: true,
      },
    },
  ],

  logLevel: 'silent',

  bail: 0,

  // baseUrl: '/',

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  // services: ['chromedriver'],

  framework: 'mocha',

  reporters: ['spec'],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
};
