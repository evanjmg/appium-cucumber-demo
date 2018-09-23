
function getAppPath(isAndroid) {
  if (process.env.BITRISE) {
    return process.env.BITRISE_APK_PATH
  } else if (isAndroid) {
    return `${process.cwd()}/android/app/build/outputs/apk/app-release.apk`
  } else {
    return `${process.cwd()}/ios/build/Build/Products/Debug-iphonesimulator/AppiumDemo.app`
  }

}

exports.helpers = {
  getAppPath,
}