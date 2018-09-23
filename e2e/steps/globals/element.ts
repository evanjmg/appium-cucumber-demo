import { Given } from 'cucumber'
import { expect } from 'chai'
const TIMEOUT = 5000
const SWIPE_DIRECTION = {
  left: 'left',
  right: 'right',
  up: 'up',
  down: 'down'
}
const waitFor = (el: string) => {
  browser.waitForExist(el, TIMEOUT)
  const isVisible = browser.isVisible(el)
  // ios visibility is done differently than Android
  let isFlattedVisible = Array.isArray(isVisible) ? !isVisible.find(visibility => !visibility) : isVisible
  expect(isFlattedVisible).to.equal(true)
}
Given(/^Click element: "([^"]*)?"$/, elId => {
  browser.click('~' + elId)
})
Given(/^Click element with text: "([^"]*)?"$/, text => {
  browser.click(`//*[@text='${text}']`)
})
Given(/^Wait for element: "([^"]*)?"$/, (elId) => {
  const el = '~' + elId
  waitFor(el)
})
Given(/^Wait for element with text: "([^"]*)?"$/, (text) => {
  const query = process.env.ANDROID ? `//*[@text='${text}']` : `//UIAStaticText[contains(@name,"${text}")]`
  waitFor(query)
})
Given(/^Element: "([^"]*)?" should have text: "([^"]*)?"$/, (elId, text) => {
  const elementText = browser.getText('~' + elId)
  expect(elementText).to.equal(text)
})
Given(/^Swipe "?([^"]*)"? element: "([^"]*)?"$/, (direction, elId) => {
  const selector = `~${elId}`
  const time = 600
  switch (direction) {
    case SWIPE_DIRECTION.right:
      browser.swipeRight(selector, time)
      break
    case SWIPE_DIRECTION.left:
      browser.swipeLeft(selector, time)
      break
    case SWIPE_DIRECTION.down:
      browser.swipeDown(selector, time)
      break
    default:
      browser.swipeUp(selector, time)
  }
})
