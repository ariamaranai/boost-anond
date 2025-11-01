chrome.runtime.onInstalled.addListener(() => {
  let { images, javascript } = chrome.contentSettings;
  let primaryUrl = { primaryUrl: "https://anond.hatelabo.jp" };
  let value = { primaryPattern: "https://anond.hatelabo.jp/*", setting: "block" };
  images.get(primaryUrl, details => details.setting == "allow" && images.set(value));
  javascript.get(primaryUrl, details => details.setting == "allow" && javascript.set(value));
});