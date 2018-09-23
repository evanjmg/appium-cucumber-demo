import { Given } from 'cucumber'
// import { isAndroid } from './utils'

export const setValueSafe = async (selector: string, text: string) => {
    browser.element(selector).setValue(text)
  // if ios has issues with typing too fast on emulators - use this and isAndroid on above
  // for (let i = 0; i < text.length; i++) {
  //   browser.element(selector).setValue(text[i])
  // }
}
Given(/^Type "([^"]*)?" into "([^"]*)?"$/, (text, id) => {
  const selector = '~' + id;
  setValueSafe(selector, text)
})
Given(/^Tap off keyboard$/, () => {
  browser.hideDeviceKeyboard('tapOutside')
})
Given(/^Press submit$/, () => {
  (browser as any).hideDeviceKeyboard('pressKey', 'Done')
})