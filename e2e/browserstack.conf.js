const getAppPath = require('./helpers').helpers.getAppPath
const commonConfig = require('./common.conf')
const APP_PATH = getAppPath()

exports.config = Object.assign(commonConfig.config, {
  user: process.env.BROWSER_STACK_USER,
  key: process.env.BROWSER_STACK_KEY,
  capabilities: [{
    app: APP_PATH,
    name: 'single_appium_test',
    build: 'webdriver-browserstack',
    device: 'Google Pixel',
    browserName: 'android',
    platformName: 'android',
    'os_version': '8.0',
    'browserstack.debug': true
  }]
})



