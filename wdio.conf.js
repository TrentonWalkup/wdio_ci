exports.config = {
  runner: 'local',
  port: 3000,
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

  logLevel: 'info',

  bail: 0,

  baseUrl: 'http://localhost:3000',

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
