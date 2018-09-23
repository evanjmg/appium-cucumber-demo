import { Given } from 'cucumber'
export const isAndroid = () => {
  return (browser as any).desiredCapabilities.platformName === 'Android'
}
Given(/^Launch App$/, () => {
  browser.timeouts('implicit', 10000);
})
Given(/^Wait "?([^"]*)"? seconds$/, (seconds) => {
  return browser.timeoutsImplicitWait(parseInt(seconds, 10) * 1000)
})
Given(/^Toggle Location Services$/, () => {
  browser.toggleLocationServices()
})
Given(/^Check for first element$/, () => {
  try {
    browser.click('~app view')
  } catch (err) {
    browser.click('~app view')
  }
})

