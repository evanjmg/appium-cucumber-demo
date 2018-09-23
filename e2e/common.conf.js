
exports.config = {
  specs: [
    './e2e/**/**.feature'
  ],
  // Patterns to exclude.
  exclude: [
    './node_modules/**/**.feature'
  ],
  sync: true,
  //
  // Level of logging verbosity: silent | verbose | command | data | result |
  // error
  logLevel: 'silent',
  coloredLogs: true,
  waitforTimeout: 16000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'cucumber',
  reporters: ['spec'],
  cucumberOpts: {
    // backtrace: true,
    compiler: [
      'ts:ts-node/register',
    ],
    format: ['pretty', 'progress'],
    // <boolean< Treat ambiguous definitions as errors
    failAmbiguousDefinitions: true,
    // <boolean> invoke formatters without executing steps
    // dryRun: false,
    // <boolean> abort the run on first failure
    failFast: true,
    // <boolean> Enable this config to treat undefined definitions as
    // warnings
    // ignoreUndefinedDefinitions: false,
    // <string[]> ("extension:module") require files with the given
    // EXTENSION after requiring MODULE (repeatable)
    // name: [],
    // <boolean> hide step definition snippets for pending steps
    // snippets: true,
    // <boolean> hide source uris
    // source: true,
    // <string[]> (name) specify the profile to use
    profile: ['progress'],
    // <string[]> (file/dir) require files before executing features
    require: [
      './e2e/steps/**/**.ts'
    ],
    // <string> specify a custom snippet syntax
    snippetSyntax: undefined,
    // <boolean> fail if there are any undefined or pending steps
    strict: true,
    // <string> (expression) only execute the features or scenarios with
    // tags matching the expression, see
    // https://docs.cucumber.io/tag-expressions/

    // <boolean> add cucumber tags to feature or scenario name
    tagsInTitle: false,
    // <number> timeout for step definitions
    timeout: 30000,
  },
  deprecationWarnings: false,
  //
  // =====
  // Hooks
  // =====
  // Gets executed once before all workers get launched.
  onPrepare: function onPrepare(config, capabilities) {
  },
  //
  // Gets executed before test execution begins. At this point you can access
  // all global variables, such as `browser`. It is the perfect place to
  // define custom commands.
  before: function before() {
    /**
     * Setup the Chai assertion framework
     */
    const chai = require('chai');

    global.expect = chai.expect;
    global.assert = chai.assert;
    global.should = chai.should();
  },

  //
  // Hook that gets executed before the suite starts
  // beforeSuite: function beforeSuite(suite) {
  // },
  //
  // Hook that gets executed _before_ a hook within the suite starts (e.g.
  // runs before calling beforeEach in Mocha)
  // beforeHook: function beforeHook() {
  // },
  //
  // Hook that gets executed _after_ a hook within the suite starts (e.g. runs
  // after calling afterEach in Mocha)
  // afterHook: function afterHook() {
  // },
  //
  // Function to be executed before a test (in Mocha/Jasmine) or a step (in
  // Cucumber) starts.
  // beforeTest: function beforeTest(test) {
  // },
  //
  // Runs before a WebdriverIO command gets executed.
  // beforeCommand: function beforeCommand(commandName, args) {
  // },
  //
  // Runs after a WebdriverIO command gets executed
  // afterCommand: function afterCommand(commandName, args, result, error) {
  // },
  //
  // Function to be executed after a test (in Mocha/Jasmine) or a step (in
  // Cucumber) starts.
  // afterTest: function afterTest(test) {
  // },
  //
  // Hook that gets executed after the suite has ended
  // afterSuite: function afterSuite(suite) {
  // },
  //
  // Gets executed after all tests are done. You still have access to all
  // global variables from the test.
  // after: function after(result, capabilities, specs) {
  // },
  //
  // Gets executed after all workers got shut down and the process is about to
  // exit. It is not possible to defer the end of the process using a promise.
}