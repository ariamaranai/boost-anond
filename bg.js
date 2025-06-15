chrome.runtime.onInstalled.addListener(() => (
  chrome.contentSettings.javascript.get({
    primaryUrl: "https://anond.hatelabo.jp"
  }, details =>
    details.setting == "allow" &&
    chrome.contentSettings.javascript.set({
      primaryPattern: "https://anond.hatelabo.jp/*",
      setting: "block"
    })
  ),
  chrome.contentSettings.images.get({
    primaryUrl: "https://anond.hatelabo.jp"
  }, details =>
    details.setting == "allow" &&
    chrome.contentSettings.images.set({
      primaryPattern: "https://anond.hatelabo.jp/*",
      setting: "block"
    })
  )
));